"use client";

import { useEffect, useState } from "react";
import { TrashIcon } from "@/assets/icons";
import { DownloadIcon, PreviewIcon } from "@/components/Tables/icons";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import axios from "axios";
import { useRouter } from "next/navigation";
import FilePopup from "@/app/pages/files/file-popup/page";

export function FilesTable() {
  const [files, setFiles] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFile, setSelectedFile] = useState(null);
  const filesPerPage = 5;
  const router = useRouter();

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/files');
        console.log(response.data);
        setFiles(response.data.files || []);
      } catch (error) {
        console.error("Erro ao buscar os arquivos", error);
      }
    };
    fetchFiles();
  }, []);

  const indexOfLastFile = currentPage * filesPerPage;
  const indexOfFirstFile = indexOfLastFile - filesPerPage;
  const currentFiles = files.slice(indexOfFirstFile, indexOfLastFile);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(files.length / filesPerPage);

  return (
    <div className="rounded-[10px] border border-stroke bg-white p-4 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:p-7.5">
      <Table>
        <TableHeader>
          <TableRow className="border-none bg-[#F7F9FC] dark:bg-dark-2 [&>th]:py-4 [&>th]:text-base [&>th]:text-dark [&>th]:dark:text-white">
            <TableHead className="min-w-[155px] xl:pl-7.5">File Name</TableHead>
            <TableHead className="text-right xl:pr-7.5">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {currentFiles.length > 0 ? (
            currentFiles.map((file, index) => (
              <TableRow key={index} className="border-[#eee] dark:border-dark-3" onClick={() => setSelectedFile(file)}>
                <TableCell className="min-w-[155px] xl:pl-7.5">
                  <h5 className="text-dark dark:text-white cursor-pointer">{file.name}</h5>
                </TableCell>
  
                <TableCell className="xl:pr-7.5">
                  <div className="flex items-center justify-end gap-x-3.5">
                    <button className="hover:text-primary">
                      <span className="sr-only">View Invoice</span>
                      <PreviewIcon />
                    </button>
  
                    <button className="hover:text-primary">
                      <span className="sr-only">Delete Invoice</span>
                      <TrashIcon />
                    </button>
  
                    <button className="hover:text-primary">
                      <span className="sr-only">Download Invoice</span>
                      <DownloadIcon />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={2} className="text-center py-4 text-dark dark:text-white">
                Nenhum arquivo encontrado.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <div className="flex justify-center mt-4">
        <button 
          onClick={() => paginate(currentPage - 1)} 
          disabled={currentPage === 1}
          className="px-4 py-2 mx-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
        >
          Anterior
        </button>
        <span className="mx-2 text-gray-700 dark:text-white">
          Página {currentPage} de {totalPages}
        </span>
        <button 
          onClick={() => paginate(currentPage + 1)} 
          disabled={currentPage === totalPages}
          className="px-4 py-2 mx-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
        >
          Próxima
        </button>
      </div>

      {selectedFile && <FilePopup file={selectedFile} onClose={() => setSelectedFile(null)} />}
    </div>
  );
}
