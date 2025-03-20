import React, { useState, useEffect, ChangeEvent } from "react";
import { CallIcon, EmailIcon, PencilSquareIcon, UserIcon } from "@/assets/icons";
import { InputGroup } from "@/components/FormElements/InputGroup";
import { TextAreaGroup } from "@/components/FormElements/InputGroup/text-area";
import { ShowcaseSection } from "@/components/Layouts/showcase-section";
import axios from "axios";

interface OrganizationState {
  external_id: string;
  name: string;
  active: boolean;
  created_at: string;
  deleted_at: string | null;
  created_by: string | null;
  deleted_by: string | null;
  usersLimit?: number;
  monthlyInteractions?: number;
  description?: string;
  meetPlan?: {
    minutesAvailable?: number;
    questionsAvailable?: number;
  };
  chatPlan?: {
    folders?: number;
    maxMegabytes?: number;
  };
}

interface OrganizationPopupProps {
  organization: OrganizationState;
  onClose: () => void;
  onChange: (updatedData: OrganizationState) => void;
}

const OrganizationPopup: React.FC<OrganizationPopupProps> = ({ organization, onClose, onChange }) => {
  const [updatedOrganization, setUpdatedOrganization] = useState<OrganizationState>(organization);

  useEffect(() => {
    setUpdatedOrganization(organization);
  }, [organization]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setUpdatedOrganization((prevState: OrganizationState) => {
      const updatedData: OrganizationState = { ...prevState };

      if (name.includes("meetPlan") || name.includes("chatPlan")) {
        const [planType, key] = name.split(".");
        updatedData[planType as keyof OrganizationState] = {
          ...updatedData[planType as keyof OrganizationState],
          [key]: value,
        };
      } else {
        updatedData[name as keyof OrganizationState] = value;
      }

      console.log("handleChange: updatedData", updatedData);

      return updatedData;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("handleSubmit está sendo chamada!");
    console.log("Dados enviados ao backend:", updatedOrganization);
  
    try {
      const response = await axios.patch(
        `http://localhost:4000/api/organizations/update/${updatedOrganization.external_id}`,
        updatedOrganization
      );
  
      console.log("Resposta do backend:", response);
  
      if (response.data && response.data.external_id === updatedOrganization.external_id) {
        console.log("Organização atualizada com sucesso!");
  
        window.location.reload();
  
        onClose();
      } else {
        console.log("Falha ao atualizar a organização: Dados incompletos ou inválidos.");
      }
    } catch (error) {
      console.error("Erro ao realizar requisição:", error);
  
      if (axios.isAxiosError(error)) {
        console.error(`Erro de rede ou ao fazer a requisição: ${error.response?.data?.message || error.message}`);
      } else {
        console.error("Ocorreu um erro inesperado.");
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="p-6 rounded-lg shadow-lg w-11/12 max-w-[1500px] max-h-[800px] overflow-auto ml-70 mt-15">
        <ShowcaseSection title="Informações da Organização" className="!p-7">
          <form onSubmit={handleSubmit}>
            <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
              <InputGroup
                className="w-full"
                type="text"
                name="name"
                label="Nome da Organização"
                placeholder="Nome da Organização"
                defaultValue={updatedOrganization.name || ""}
                onChange={handleChange}
                icon={<UserIcon />}
                iconPosition="left"
                height="sm"
              />
            </div>

            <InputGroup
              className="mb-5.5"
              type="text"
              name="usersLimit"
              label="Limite de Usuários"
              placeholder="Limite de Usuários"
              defaultValue={String(updatedOrganization.usersLimit || "")}
              onChange={handleChange}
              iconPosition="left"
              height="sm"
            />

            <InputGroup
              className="mb-5.5"
              type="text"
              name="monthlyInteractions"
              label="Interações Mensais"
              placeholder="Interações Mensais"
              defaultValue={String(updatedOrganization.monthlyInteractions || "")}
              onChange={handleChange}
              icon={<EmailIcon />}
              iconPosition="left"
              height="sm"
            />

            <TextAreaGroup
              className="mb-5.5"
              label="Descrição"
              placeholder="Escreva uma descrição"
              defaultValue={updatedOrganization.description || ""}
              onChange={handleChange}
              icon={<PencilSquareIcon />}
            />

            <div className="mb-5.5">
              <h3 className="text-lg font-bold">Plano de Reuniões</h3>
              <InputGroup
                className="mb-5.5"
                type="text"
                name="meetPlan.minutesAvailable"
                label="Minutos Disponíveis"
                placeholder="Minutos Disponíveis"
                defaultValue={String(updatedOrganization.meetPlan?.minutesAvailable || "")}
                onChange={handleChange}
                icon={<CallIcon />}
                iconPosition="left"
                height="sm"
              />
              <InputGroup
                className="mb-5.5"
                type="text"
                name="meetPlan.questionsAvailable"
                label="Perguntas Disponíveis"
                placeholder="Perguntas Disponíveis"
                defaultValue={String(updatedOrganization.meetPlan?.questionsAvailable || "")}
                onChange={handleChange}
                icon={<CallIcon />}
                iconPosition="left"
                height="sm"
              />
            </div>

            <div className="mb-5.5">
              <h3 className="text-lg font-bold">Plano de Chat</h3>
              <InputGroup
                className="mb-5.5"
                type="text"
                name="chatPlan.folders"
                label="Pastas"
                placeholder="Pastas"
                defaultValue={String(updatedOrganization.chatPlan?.folders || "")}
                onChange={handleChange}
                icon={<CallIcon />}
                iconPosition="left"
                height="sm"
              />
              <InputGroup
                className="mb-5.5"
                type="text"
                name="chatPlan.maxMegabytes"
                label="Máximo de Megabytes"
                placeholder="Máximo de Megabytes"
                defaultValue={String(updatedOrganization.chatPlan?.maxMegabytes || "")}
                onChange={handleChange}
                icon={<EmailIcon />}
                iconPosition="left"
                height="sm"
              />
            </div>

            <div className="flex justify-end gap-3">
              <button
                className="rounded-lg border border-stroke px-6 py-[7px] font-medium text-dark hover:shadow-1 dark:border-dark-3 dark:text-white"
                type="button"
                onClick={onClose}
              >
                Fechar
              </button>

              <button
                className="rounded-lg bg-primary px-6 py-[7px] font-medium text-gray-2 hover:bg-opacity-90"
                type="submit"

>
                Salvar Alterações
              </button>
            </div>
          </form>
        </ShowcaseSection>
      </div>
    </div>
  );
};

export default OrganizationPopup;
