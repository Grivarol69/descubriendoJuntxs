// @ts-nocheck
"use client";

import style from "./proyectos.module.css";
import axios from "axios";
import AllCards from "@/components/allCardsComponent/allCards";
import { useEffect, useState } from "react";

const Proyectos = () => {
  const urlGlobal = "https://juntxs.vercel.app/";

  //El Backup de projects
  const [allProjects, setAllProjects] = useState([]);
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [name, setName] = useState("");

  const fetchProjects = async () => {
    try {
      let response;
      if (name) {
        response = await axios.get(
          `https://juntxs.vercel.app/programs?name=${name}`
        );
      } else {
        response = await axios.get(
          `${urlGlobal}programs/pagination?page=${currentPage}`
        );
      }
      setProjects(response.data);
      if (allProjects.length === 0) {
        setAllProjects(response.data);
      }
    } catch (error) {
      console.error(
        "Error fetching projects:",
        error.response?.data || error.message
      );
    }
  };

  useEffect(() => {
    fetchProjects();
  }, [currentPage, name]);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    console.log(name);
  };

  const filterStatus = (e) => {
    let projectsToFilter = allProjects.length > 0 ? allProjects : projects;
    let filteredProjects = [];

    if (e.target.name === "Activo") {
      filteredProjects = projectsToFilter.filter(
        (project) => project.state === "Activo"
      );
    }

    if (e.target.name === "Inactivo") {
      filteredProjects = projectsToFilter.filter(
        (project) => project.state === "Inactivo"
      );
    }

    setProjects(filteredProjects);
  };

  const orderAB = (e) => {
    if (e.target.name === "AZ") {
      const sortedProjects = [...projects].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setProjects(sortedProjects);
    } else if (e.target.name === "ZA") {
      const sortedProjects = [...projects].sort((a, b) =>
        b.name.localeCompare(a.name)
      );
      setProjects(sortedProjects);
    }
    
  };
  const orderDate = (e) => {
    if (e.target.name === "Nuevas") {
      const sortedProjects = [...projects].sort(
        (a, b) => new Date(b.dateIn) - new Date(a.dateIn)
      );
      setProjects(sortedProjects);
    } else if (e.target.name === "Antiguas") {
      const sortedProjects = [...projects].sort(
        (a, b) => new Date(a.dateIn) - new Date(b.dateIn)
      );
      setProjects(sortedProjects);
    }
    
  };

  const clearStatusFilter = () => {
    setProjects(allProjects.length > 0 ? allProjects : projects);
  };

  return (
    <>
      <div className={style.backgroundProyecto}>
        <div className="flex justify-between w-full">
          <div className="flex flex-col">
            <div>
              <label htmlFor="">Orden Alfabetico</label>
              <button
                className="rounded-md bg-slate-100 border"
                name="AZ"
                onClick={orderAB}
              >
                AZ↑
              </button>
              <button
                className="rounded-md bg-slate-100 border"
                name="ZA"
                onClick={orderAB}
              >
                ZA↓
              </button>
            </div>
            <div>
              <label htmlFor="">Orden por Lanzamiento</label>
              <button
                className="rounded-md bg-slate-100 border"
                name="Nuevas"
                onClick={orderDate}
              >
                Nuevas
              </button>
              <button
                className="rounded-md bg-slate-100 border"
                name="Antiguas"
                onClick={orderDate}
              >
                Antiguas
              </button>
            </div>
          </div>

          <div className="flex flex-col">
            <div>
              <label htmlFor="">Filtro por Estado</label>
              <button
                className="rounded-md bg-slate-100 border"
                name="Activo"
                onClick={filterStatus}
              >
                Activas
              </button>
              <button
                className="rounded-md bg-slate-100 border"
                name="Inactivo"
                onClick={filterStatus}
              >
                Inactivas
              </button>
            </div>
            <div className="flex">
              <button
                className="rounded-md bg-slate-100 border"
                onClick={clearStatusFilter}
              >
                🗑️
              </button>
            </div>
          </div>
          <div>
            <input
              type="text"
              value={name}
              onChange={handleSearchChange}
              placeholder="Buscar"
              className="border-2"
            />
          </div>
        </div>

        <AllCards projects={projects} />

        <div>
          <button
            className="home-button-logic"
            name="prev"
            onClick={() => paginado(currentPage - 1)}
            disabled={currentPage === 1}
          >
            ᐗ
          </button>
          <span>{currentPage}</span>
          <button
            className="home-button-logic"
            name="next"
            onClick={() => paginado(currentPage + 1)}
          >
            ᐓ
          </button>
        </div>
      </div>
    </>
  );
};

export default Proyectos;
