PGDMP         -                y            postgres    13.3    13.3 <    
           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    13442    postgres    DATABASE     h   CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Spanish_Argentina.1252';
    DROP DATABASE postgres;
                postgres    false                       0    0    DATABASE postgres    COMMENT     N   COMMENT ON DATABASE postgres IS 'default administrative connection database';
                   postgres    false    3085                        3079    16384 	   adminpack 	   EXTENSION     A   CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;
    DROP EXTENSION adminpack;
                   false                       0    0    EXTENSION adminpack    COMMENT     M   COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';
                        false    2            �            1259    65883    externo    TABLE     �  CREATE TABLE public.externo (
    id integer NOT NULL,
    codigo_externo character varying,
    numero_externo character varying,
    anyo_externo integer,
    iniciador_externo character varying,
    asunto_externo character varying,
    cantidad_parcelas_externo character varying,
    codigo_interno character varying,
    observacion_externo character varying,
    tramite_id integer
);
    DROP TABLE public.externo;
       public         heap    postgres    false            �            1259    65881    externo_id_seq    SEQUENCE     �   ALTER TABLE public.externo ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.externo_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    218            �            1259    65806 	   historial    TABLE     �   CREATE TABLE public.historial (
    id integer NOT NULL,
    estado character varying,
    fechahora timestamp without time zone,
    tramite_id integer,
    usuario_id integer
);
    DROP TABLE public.historial;
       public         heap    postgres    false            �            1259    65804    historial_id_seq    SEQUENCE     �   ALTER TABLE public.historial ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.historial_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    208            �            1259    65838    mensura    TABLE     q  CREATE TABLE public.mensura (
    id integer NOT NULL,
    n_origen character varying,
    tipo_parcela integer,
    departamento_mensura integer,
    plano_mensura character varying,
    matricula character varying,
    comitente_mensura character varying,
    plano_provisorio_uno character varying,
    plano_provisorio_dos character varying,
    plano_provisorio_tres character varying,
    plano_definitivo character varying,
    archivo_mensura character varying,
    folio_mensura character varying,
    cantidad_parcelas_mensura character varying,
    observacion_mensura character varying,
    tramite_id integer
);
    DROP TABLE public.mensura;
       public         heap    postgres    false            �            1259    65836    mensura_id_seq    SEQUENCE     �   ALTER TABLE public.mensura ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.mensura_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    212            �            1259    65853    nota    TABLE     (  CREATE TABLE public.nota (
    id integer NOT NULL,
    motivo integer,
    origen character varying,
    asunto character varying,
    fechainicio_nota date,
    fechavenc_nota date,
    cantidad_parcelas_nota character varying,
    observacion_nota character varying,
    tramite_id integer
);
    DROP TABLE public.nota;
       public         heap    postgres    false            �            1259    65851    nota_id_seq    SEQUENCE     �   ALTER TABLE public.nota ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.nota_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    214            �            1259    65868    oficio    TABLE     �   CREATE TABLE public.oficio (
    id integer NOT NULL,
    motivo_oficio integer,
    asunto_oficio character varying,
    termino_oficio date,
    fechavenc_oficio date,
    observacion_oficio character varying,
    tramite_id integer
);
    DROP TABLE public.oficio;
       public         heap    postgres    false            �            1259    65866    oficio_id_seq    SEQUENCE     �   ALTER TABLE public.oficio ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.oficio_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    216            �            1259    65774    perfilas    TABLE     n   CREATE TABLE public.perfilas (
    id integer NOT NULL,
    nombre character varying(30),
    tipo boolean
);
    DROP TABLE public.perfilas;
       public         heap    postgres    false            �            1259    65772    perfila_id_seq    SEQUENCE     �   ALTER TABLE public.perfilas ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.perfila_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    202            �            1259    65796    tramitea    TABLE     �   CREATE TABLE public.tramitea (
    id integer NOT NULL,
    numero character varying,
    interno_catastro integer,
    caratula character varying,
    observacion character varying,
    fechainicio date
);
    DROP TABLE public.tramitea;
       public         heap    postgres    false            �            1259    65794    tramitea_id_seq    SEQUENCE     �   ALTER TABLE public.tramitea ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.tramitea_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    206            �            1259    65781 	   usuarioas    TABLE     �   CREATE TABLE public.usuarioas (
    id integer NOT NULL,
    nombre character varying(30),
    apellido character varying(30),
    email character varying(30),
    pass character varying(16),
    cuil character varying,
    perfila_id integer
);
    DROP TABLE public.usuarioas;
       public         heap    postgres    false            �            1259    65779    usuariosa_id_seq    SEQUENCE     �   ALTER TABLE public.usuarioas ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.usuariosa_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    204            �            1259    65826 
   valoracion    TABLE     l   CREATE TABLE public.valoracion (
    id integer NOT NULL,
    valoracion integer,
    tramite_id integer
);
    DROP TABLE public.valoracion;
       public         heap    postgres    false            �            1259    65824    valoracion_id_seq    SEQUENCE     �   ALTER TABLE public.valoracion ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.valoracion_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    210                      0    65883    externo 
   TABLE DATA           �   COPY public.externo (id, codigo_externo, numero_externo, anyo_externo, iniciador_externo, asunto_externo, cantidad_parcelas_externo, codigo_interno, observacion_externo, tramite_id) FROM stdin;
    public          postgres    false    218   �H       �          0    65806 	   historial 
   TABLE DATA           R   COPY public.historial (id, estado, fechahora, tramite_id, usuario_id) FROM stdin;
    public          postgres    false    208   �H                 0    65838    mensura 
   TABLE DATA           1  COPY public.mensura (id, n_origen, tipo_parcela, departamento_mensura, plano_mensura, matricula, comitente_mensura, plano_provisorio_uno, plano_provisorio_dos, plano_provisorio_tres, plano_definitivo, archivo_mensura, folio_mensura, cantidad_parcelas_mensura, observacion_mensura, tramite_id) FROM stdin;
    public          postgres    false    212   �H                 0    65853    nota 
   TABLE DATA           �   COPY public.nota (id, motivo, origen, asunto, fechainicio_nota, fechavenc_nota, cantidad_parcelas_nota, observacion_nota, tramite_id) FROM stdin;
    public          postgres    false    214   I                 0    65868    oficio 
   TABLE DATA           �   COPY public.oficio (id, motivo_oficio, asunto_oficio, termino_oficio, fechavenc_oficio, observacion_oficio, tramite_id) FROM stdin;
    public          postgres    false    216   2I       �          0    65774    perfilas 
   TABLE DATA           4   COPY public.perfilas (id, nombre, tipo) FROM stdin;
    public          postgres    false    202   OI       �          0    65796    tramitea 
   TABLE DATA           d   COPY public.tramitea (id, numero, interno_catastro, caratula, observacion, fechainicio) FROM stdin;
    public          postgres    false    206   �I       �          0    65781 	   usuarioas 
   TABLE DATA           X   COPY public.usuarioas (id, nombre, apellido, email, pass, cuil, perfila_id) FROM stdin;
    public          postgres    false    204   J       �          0    65826 
   valoracion 
   TABLE DATA           @   COPY public.valoracion (id, valoracion, tramite_id) FROM stdin;
    public          postgres    false    210   cJ                  0    0    externo_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.externo_id_seq', 1, false);
          public          postgres    false    217                       0    0    historial_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.historial_id_seq', 1, false);
          public          postgres    false    207                       0    0    mensura_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.mensura_id_seq', 1, false);
          public          postgres    false    211                       0    0    nota_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.nota_id_seq', 1, false);
          public          postgres    false    213                       0    0    oficio_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.oficio_id_seq', 1, false);
          public          postgres    false    215                       0    0    perfila_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.perfila_id_seq', 12, true);
          public          postgres    false    201                       0    0    tramitea_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.tramitea_id_seq', 1, false);
          public          postgres    false    205                       0    0    usuariosa_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.usuariosa_id_seq', 1, true);
          public          postgres    false    203                       0    0    valoracion_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.valoracion_id_seq', 1, false);
          public          postgres    false    209            k           2606    65890    externo externo_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.externo
    ADD CONSTRAINT externo_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.externo DROP CONSTRAINT externo_pkey;
       public            postgres    false    218            a           2606    65813    historial historial_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.historial
    ADD CONSTRAINT historial_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.historial DROP CONSTRAINT historial_pkey;
       public            postgres    false    208            e           2606    65845    mensura mensura_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.mensura
    ADD CONSTRAINT mensura_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.mensura DROP CONSTRAINT mensura_pkey;
       public            postgres    false    212            g           2606    65860    nota nota_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.nota
    ADD CONSTRAINT nota_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.nota DROP CONSTRAINT nota_pkey;
       public            postgres    false    214            i           2606    65875    oficio oficio_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.oficio
    ADD CONSTRAINT oficio_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.oficio DROP CONSTRAINT oficio_pkey;
       public            postgres    false    216            [           2606    65778    perfilas perfila_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.perfilas
    ADD CONSTRAINT perfila_pkey PRIMARY KEY (id);
 ?   ALTER TABLE ONLY public.perfilas DROP CONSTRAINT perfila_pkey;
       public            postgres    false    202            _           2606    65803    tramitea tramitea_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.tramitea
    ADD CONSTRAINT tramitea_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.tramitea DROP CONSTRAINT tramitea_pkey;
       public            postgres    false    206            ]           2606    65788    usuarioas usuariosa_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.usuarioas
    ADD CONSTRAINT usuariosa_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.usuarioas DROP CONSTRAINT usuariosa_pkey;
       public            postgres    false    204            c           2606    65830    valoracion valoracion_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.valoracion
    ADD CONSTRAINT valoracion_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.valoracion DROP CONSTRAINT valoracion_pkey;
       public            postgres    false    210            s           2606    65891    externo externo_tramite_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.externo
    ADD CONSTRAINT externo_tramite_id_fkey FOREIGN KEY (tramite_id) REFERENCES public.tramitea(id);
 I   ALTER TABLE ONLY public.externo DROP CONSTRAINT externo_tramite_id_fkey;
       public          postgres    false    206    2911    218            m           2606    65814 #   historial historial_tramite_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.historial
    ADD CONSTRAINT historial_tramite_id_fkey FOREIGN KEY (tramite_id) REFERENCES public.tramitea(id);
 M   ALTER TABLE ONLY public.historial DROP CONSTRAINT historial_tramite_id_fkey;
       public          postgres    false    208    206    2911            n           2606    65819 #   historial historial_usuario_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.historial
    ADD CONSTRAINT historial_usuario_id_fkey FOREIGN KEY (usuario_id) REFERENCES public.usuarioas(id);
 M   ALTER TABLE ONLY public.historial DROP CONSTRAINT historial_usuario_id_fkey;
       public          postgres    false    2909    204    208            p           2606    65846    mensura mensura_tramite_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.mensura
    ADD CONSTRAINT mensura_tramite_id_fkey FOREIGN KEY (tramite_id) REFERENCES public.tramitea(id);
 I   ALTER TABLE ONLY public.mensura DROP CONSTRAINT mensura_tramite_id_fkey;
       public          postgres    false    2911    206    212            q           2606    65861    nota nota_tramite_id_fkey    FK CONSTRAINT     ~   ALTER TABLE ONLY public.nota
    ADD CONSTRAINT nota_tramite_id_fkey FOREIGN KEY (tramite_id) REFERENCES public.tramitea(id);
 C   ALTER TABLE ONLY public.nota DROP CONSTRAINT nota_tramite_id_fkey;
       public          postgres    false    206    2911    214            r           2606    65876    oficio oficio_tramite_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.oficio
    ADD CONSTRAINT oficio_tramite_id_fkey FOREIGN KEY (tramite_id) REFERENCES public.tramitea(id);
 G   ALTER TABLE ONLY public.oficio DROP CONSTRAINT oficio_tramite_id_fkey;
       public          postgres    false    216    206    2911            l           2606    65789 "   usuarioas usuariosa_perfil_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.usuarioas
    ADD CONSTRAINT usuariosa_perfil_id_fkey FOREIGN KEY (perfila_id) REFERENCES public.perfilas(id);
 L   ALTER TABLE ONLY public.usuarioas DROP CONSTRAINT usuariosa_perfil_id_fkey;
       public          postgres    false    204    2907    202            o           2606    65831 %   valoracion valoracion_tramite_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.valoracion
    ADD CONSTRAINT valoracion_tramite_id_fkey FOREIGN KEY (tramite_id) REFERENCES public.tramitea(id);
 O   ALTER TABLE ONLY public.valoracion DROP CONSTRAINT valoracion_tramite_id_fkey;
       public          postgres    false    206    2911    210                  x������ � �      �      x������ � �            x������ � �            x������ � �            x������ � �      �   �   x�=���0Eg�+����X�#L��X��-���)ߏ�۽>�G�гP(Y��n��Dj(��v���&�I-�J�JeX-X�
B�+;�X_Y9pN��:	O~�Z.p�y�?�[���^��0��Mf�҂1[~l�s�k8{      �      x������ � �      �   G   x�3�t����t/-�L-*J��Lr�a<KS��������\NC#cS3sN#cc3sKsKNC�=... G�B      �      x������ � �     