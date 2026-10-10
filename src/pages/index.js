import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

const unidades = [
  {
    numero: '01',
    titulo: 'Introducción a los Sistemas Operativos',
    descripcion:
      'Conceptos fundamentales, evolución histórica, clasificación, llamadas al sistema y mecanismos de protección.',
    enlace: '/docs/unidad-1-introduccion/',
    estado: 'Disponible',
  },
  {
    numero: '02',
    titulo: 'Definición y Control de Procesos',
    descripcion:
      'Procesos, estados, PCB, planificación de CPU, hilos y cambios de contexto.',
    enlace: '/docs/unidad-2-procesos/',
    estado: 'En desarrollo',
  },
  {
    numero: '03',
    titulo: 'Concurrencia y Sincronización',
    descripcion:
      'Sección crítica, condiciones de carrera, semáforos, monitores y algoritmos de sincronización.',
    enlace: null,
    estado: 'Próximamente',
  },
  {
    numero: '04',
    titulo: 'Interbloqueos (Deadlocks)',
    descripcion:
      'Condiciones de Coffman, prevención, detección, recuperación y algoritmo del banquero.',
    enlace: null,
    estado: 'Próximamente',
  },
  {
    numero: '05',
    titulo: 'Administración de Memoria',
    descripcion:
      'Asignación de memoria, fragmentación, paginación, segmentación y memoria virtual.',
    enlace: null,
    estado: 'Próximamente',
  },
];

function Encabezado() {
  return (
    <header className={styles.hero}>
      <div className="container">
        <div className={styles.heroContenido}>
          <span className={styles.etiqueta}>
            PROYECTO ACADÉMICO · SISTEMAS OPERATIVOS I
          </span>

          <h1 className={styles.heroTitulo}>
            Wiki de Sistemas
            <br />
            Operativos I
          </h1>

          <p className={styles.heroDescripcion}>
            Una base de conocimientos diseñada para comprender
            los fundamentos, el funcionamiento y la administración
            de los sistemas operativos.
          </p>

          <div className={styles.heroBotones}>
            <Link
              className={styles.botonPrincipal}
              to="/docs/unidad-1-introduccion/"
            >
              Explorar la Wiki →
            </Link>

            <a className={styles.botonSecundario} href="#unidades">
              Ver unidades
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function TarjetaUnidad({ unidad }) {
  return (
    <article className={styles.tarjeta}>
      <div className={styles.tarjetaSuperior}>
        <span className={styles.numeroUnidad}>
          UNIDAD {unidad.numero}
        </span>

        <span className={styles.estado}>
          {unidad.estado}
        </span>
      </div>

      <h3>{unidad.titulo}</h3>

      <p>{unidad.descripcion}</p>

      {unidad.enlace ? (
        <Link className={styles.enlaceUnidad} to={unidad.enlace}>
          Explorar unidad →
        </Link>
      ) : (
        <span className={styles.noDisponible}>
          Contenido próximamente
        </span>
      )}
    </article>
  );
}

function SeccionUnidades() {
  return (
    <section id="unidades" className={styles.seccionUnidades}>
      <div className="container">
        <div className={styles.seccionEncabezado}>
          <span className={styles.subtitulo}>
            CONTENIDO ACADÉMICO
          </span>

          <h2>Explora nuestras unidades</h2>

          <p>
            Aprende los principales conceptos de Sistemas Operativos I
            mediante documentación, ejemplos prácticos y diagramas.
          </p>
        </div>

        <div className={styles.gridUnidades}>
          {unidades.map((unidad) => (
            <TarjetaUnidad key={unidad.numero} unidad={unidad} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SeccionInformacion() {
  return (
    <section className={styles.seccionInformacion}>
      <div className="container">
        <h2>Aprende, comprende y experimenta</h2>

        <p>
          Esta Wiki forma parte del proyecto académico de Sistemas
          Operativos I. Su objetivo es organizar los conocimientos
          adquiridos durante el curso mediante documentación técnica,
          ejemplos de código, diagramas y herramientas interactivas.
        </p>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title="Inicio"
      description="Wiki académica de Sistemas Operativos I"
    >
      <main>
        <Encabezado />
        <SeccionUnidades />
        <SeccionInformacion />
      </main>
    </Layout>
  );
}
