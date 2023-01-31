import { useEffect, useState } from "react";
import { Route } from "../../utils/Route";
import "./Bakery.css";

interface BakeryProps {
  id: string;
  name: string;
  description: string;
  state: string;
  city: string;
  street: string;
}

export function Bakery() {
  const [bakeryDb, setBakeryDb] = useState<BakeryProps[]>([
    {
      city: "Recife",
      description:
        "Aqui é o lugar perfeito para começar o seu dia com um sorriso. Com uma ampla variedade de pães artesanais, doces e salgados",
      id: "01",
      name: "Padaria Doce Delícia",
      state: "PE",
      street: "Rua Barão de Lucena",
    },
  ]);

  useEffect(() => {
    getAllBakeries();
  }, []);

  async function getAllBakeries() {
    await fetch(Route).then(async (response) =>
      setBakeryDb(await response.json())
    );
  }

  return (
    <div className="Container">
      {bakeryDb.map((bakery) => (
        <div key={bakery.id} className="BakeryContainer">
          <div className="BakeryTitle">
            <h1>{bakery.name.toUpperCase()} </h1>
          </div>
          <table className="Content">
            <thead className="ContentTable">
              <tr>
                <th className="infos">ID</th>
              </tr>
              <tr>
                <th className="infos">Nome</th>
              </tr>
              <tr>
                <th className="infos">Descrição</th>
              </tr>
              <tr>
                <th className="infos">Estado</th>
              </tr>
              <tr>
                <th className="infos">Cidade</th>
              </tr>
              <tr>
                <th className="infos">Rua</th>
              </tr>
            </thead>

            <tbody className="ContentTable body">
                <tr>
                    <th className="infos yellow">{bakery.id}</th>
                </tr>
                <tr>
                    <th className="infos yellow">{bakery.name}</th>
                </tr>
                <tr>
                    <th  className="infos yellow">{bakery.description}</th>
                </tr>
                <tr>
                    <th className="infos yellow">{bakery.state}</th>
                </tr>
                <tr>
                    <th className="infos yellow">{bakery.city}</th>
                </tr>
                <tr>
                    <th className="infos yellow">{bakery.street}</th>
                </tr>
            </tbody>

          </table>
        </div>
      ))}
    </div>
  );
}
