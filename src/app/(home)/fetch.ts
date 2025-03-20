import axios from "axios";

export async function getOverviewData() {
  try {
    const [responseOrganizations] = await Promise.all([
      axios.get("http://localhost:4000/api/organizations?page=1&limit=1"),
    ]);

    return {
      organizations: { value: responseOrganizations.data.totalItems || 0, growthRate: 0.00 },
      tickets: { value: 0.00, growthRate: 0.00 },
      products: { value: 0.00, growthRate: 0.00 },
      users: { value: 0.00, growthRate: 0.00 },
    };
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    return {
      organizations: { value: 0, growthRate: 0.00 },
      tickets: { value: 0, growthRate: 0.00 },
      products: { value: 3456, growthRate: 0.00 },
      users: { value: 3456, growthRate: 0.00 },
    };
  }
}