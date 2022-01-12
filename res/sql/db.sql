--
-- PostgreSQL database dump
--

-- Dumped from database version 14.1
-- Dumped by pg_dump version 14.1

-- Started on 2022-01-12 23:45:10

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 2 (class 3079 OID 16384)
-- Name: adminpack; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;


--
-- TOC entry 3313 (class 0 OID 0)
-- Dependencies: 2
-- Name: EXTENSION adminpack; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 210 (class 1259 OID 16397)
-- Name: produse; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.produse (
    id integer NOT NULL,
    nume character varying(100) NOT NULL,
    img_path character varying(250),
    categorie character varying(50) NOT NULL,
    sub_categorie character varying(50) NOT NULL,
    pret numeric NOT NULL,
    garantie integer
);


ALTER TABLE public.produse OWNER TO postgres;

--
-- TOC entry 211 (class 1259 OID 16402)
-- Name: produse_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.produse ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.produse_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 99999
    CACHE 1
);


--
-- TOC entry 3306 (class 0 OID 16397)
-- Dependencies: 210
-- Data for Name: produse; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.produse (id, nume, img_path, categorie, sub_categorie, pret, garantie) VALUES (1, 'chitara acustica fender', '/res/produse/1.jpg', 'chitara', 'acustica', 500.00, 2);
INSERT INTO public.produse (id, nume, img_path, categorie, sub_categorie, pret, garantie) VALUES (3, 'chitara bass ibanez', '/res/produse/1.jpg', 'chitara', 'bass
', 1500.00, 1);
INSERT INTO public.produse (id, nume, img_path, categorie, sub_categorie, pret, garantie) VALUES (4, 'chitara electro-acustica fender', '/res/produse/1.jpg
', 'chitara
', 'electro-acustica
', 800.00, 2);
INSERT INTO public.produse (id, nume, img_path, categorie, sub_categorie, pret, garantie) VALUES (5, 'tobe', '/res/produse/2.jpg', 'tobe', 'acustice', 400.00, 1);
INSERT INTO public.produse (id, nume, img_path, categorie, sub_categorie, pret, garantie) VALUES (7, 'tobe
', '/res/produse/2.jpg
', 'tobe
', 'electrice
', 800.00, 2);
INSERT INTO public.produse (id, nume, img_path, categorie, sub_categorie, pret, garantie) VALUES (8, 'cinele
', '/res/produse/2.jpg
', 'tobe
', 'cinele
', 100.00, 2);
INSERT INTO public.produse (id, nume, img_path, categorie, sub_categorie, pret, garantie) VALUES (9, 'accesorii
', '/res/produse/2.jpg
', 'tobe
', 'accesorii
', 50.00, 3);
INSERT INTO public.produse (id, nume, img_path, categorie, sub_categorie, pret, garantie) VALUES (10, 'pian', '/res/produse/3.jpg', 'pian', 'acustic', 1000.00, 1);
INSERT INTO public.produse (id, nume, img_path, categorie, sub_categorie, pret, garantie) VALUES (11, 'claviatura
', '/res/produse/3.jpg', 'pian
', 'claviatura', 900.00, 2);
INSERT INTO public.produse (id, nume, img_path, categorie, sub_categorie, pret, garantie) VALUES (12, 'midi
', '/res/produse/3.jpg
', 'pian
', 'midi
', 500.00, 3);
INSERT INTO public.produse (id, nume, img_path, categorie, sub_categorie, pret, garantie) VALUES (6, 'tobe electrice
', '/res/produse/1.jpg
', 'tobe
', 'electrice
', 600.00, 1);
INSERT INTO public.produse (id, nume, img_path, categorie, sub_categorie, pret, garantie) VALUES (2, 'chitara electrica fender', '/res/produse/1.jpg', 'chitara', 'electrica
', 1000.00, 2);


--
-- TOC entry 3316 (class 0 OID 0)
-- Dependencies: 211
-- Name: produse_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.produse_id_seq', 1, false);


--
-- TOC entry 3166 (class 2606 OID 16401)
-- Name: produse produse_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.produse
    ADD CONSTRAINT produse_pkey PRIMARY KEY (id);


--
-- TOC entry 3314 (class 0 OID 0)
-- Dependencies: 210
-- Name: TABLE produse; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.produse TO victor;


--
-- TOC entry 3315 (class 0 OID 0)
-- Dependencies: 211
-- Name: SEQUENCE produse_id_seq; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON SEQUENCE public.produse_id_seq TO victor;


-- Completed on 2022-01-12 23:45:11

--
-- PostgreSQL database dump complete
--

