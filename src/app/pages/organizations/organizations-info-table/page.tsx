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
import axios from "axios";
import OrganizationPopup from "@/app/pages/organizations/organization-popup/page";

export function OrganizationsTable() {
  const [organizations, setOrganizations] = useState<any[] | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOrganization, setSelectedOrganization] = useState<any | null>(null);
  const organizationsPerPage = 5;

  useEffect(() => {
    const fetchOrganizations = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/organizations");
        console.log("Organizações recebidas:", response.data);
        setOrganizations(Array.isArray(response.data) ? response.data : response.data.files || []);
      } catch (error) {
        console.error("Erro ao buscar as organizações", error);
      }
    };
    fetchOrganizations();
  }, []);

  if (organizations === null) {
    return <p className="text-center py-4 text-dark dark:text-white">Carregando organizações...</p>;
  }

  const indexOfLastOrg = currentPage * organizationsPerPage;
  const indexOfFirstOrg = indexOfLastOrg - organizationsPerPage;
  const currentOrganizations = organizations.slice(indexOfFirstOrg, indexOfLastOrg);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(organizations.length / organizationsPerPage);

  const handleOrganizationClick = (org: any) => {
    console.log("Organização selecionada:", org);
    setSelectedOrganization(org);
  };

  const handleClosePopup = () => {
    setSelectedOrganization(null);
  };

  return (
    <div className="rounded-[10px] border border-stroke bg-white p-4 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:p-7.5">
      <Table>
        <TableHeader>
          <TableRow className="border-none bg-[#F7F9FC] dark:bg-dark-2 [&>th]:py-4 [&>th]:text-base [&>th]:text-dark [&>th]:dark:text-white">
            <TableHead className="min-w-[155px] xl:pl-7.5">Organization Name</TableHead>
            <TableHead className="text-right xl:pr-7.5">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {currentOrganizations.length > 0 ? (
            currentOrganizations.map((org, index) => (
              <TableRow key={index} className="border-[#eee] dark:border-dark-3" onClick={() => handleOrganizationClick(org)}>
                <TableCell className="min-w-[155px] xl:pl-7.5">
                  <h5 className="text-dark dark:text-white cursor-pointer">{org.name}</h5>
                </TableCell>
                <TableCell className="xl:pr-7.5">
                  <div className="flex items-center justify-end gap-x-3.5">
                    <button className="hover:text-primary">
                      <span className="sr-only">View</span>
                      <PreviewIcon />
                    </button>
                    <button className="hover:text-primary">
                      <span className="sr-only">Delete</span>
                      <TrashIcon />
                    </button>
                    <button className="hover:text-primary">
                      <span className="sr-only">Download</span>
                      <DownloadIcon />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={2} className="text-center py-4 text-dark dark:text-white">
                Nenhuma organização encontrada.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <div className="flex justify-center mt-4">
        <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} className="px-4 py-2 mx-2 bg-blue-500 text-white rounded disabled:bg-gray-400">
          Anterior
        </button>
        <span className="mx-2 text-gray-700 dark:text-white">Página {currentPage} de {totalPages}</span>
        <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages} className="px-4 py-2 mx-2 bg-blue-500 text-white rounded disabled:bg-gray-400">
          Próxima
        </button>
      </div>

      {selectedOrganization && (
        <OrganizationPopup 
          organization={selectedOrganization} 
          onClose={handleClosePopup}  // Passando a função para fechar o popup
        />
      )}

    </div>
  );
}
