<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
<meta name="google-site-verification" content="54nOkmbODnNd8AJopsYw-N_7FmcdWa0LqAknVdN6iAY" />
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
    <!-- Primary Meta Tags -->
    <title>Erick Matamoros Fernández</title>
    <meta name="title" content="Erick Matamoros Fernández">
    <meta name="description"
        content="Ingeniero en sistemas dedicado a desarrollar soluciones web y diseño de interfaces de usuario aplicando tecnologías de mayor auge.   ">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://erickmatamoros.herokuapp.com/">
    <meta property="og:title" content="Erick Matamoros Fernández">
    <meta property="og:description"
        content="Ingeniero en sistemas dedicado a desarrollar soluciones web y diseño de interfaces de usuario aplicando tecnologías de mayor auge.   ">
    <meta property="og:image" content="{{ asset('css/img/Erick Matamoros Fernández.svg') }}">

    <!-- Twitter -->
    <meta property="twitter:card" content="Ingeniero en sistemas">
    <meta property="twitter:url" content="https://erickmatamoros.herokuapp.com/">
    <meta property="twitter:title" conwitter:descriptiontent="Erick Matamoros Fernández">
    <meta property="t"
        content="Ingeniero en sistemas dedicado a desarrollar soluciones web y diseño de interfaces de usuario aplicando tecnologías de mayor auge.   ">
    <meta property="twitter:image" content="{{ asset('css/img/Erick Matamoros Fernández.svg') }}">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>

<body class="flex flex-col justify-between relative">
    <header class="z-10 absolute">
        <nav class="bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 px-10 py-2 md:px-20 md:py-4">
            <div class="flex items-center justify-between">
                <div class="w-2/12 sm:w-1/12 md:w-20">
                    <img src="http://erickmatamoros.herokuapp.com/css/img/Erick%20Matamoros%20Fern%C3%A1ndez.svg"
                        alt="" />
                </div>
                <svg xmlns="http://www.w3.org/2000/svg"
                    class="sm:hidden h-10 w-10 p-1 text-gray-200 hover:border-2 hover:border-indigo-400 rounded shadow-2xl"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </div>
        </nav>
    </header>

    <div class="bg-gray-900 absolute inset-0">

        <div class="relative px-10 py-4 md:px-20">
            <div class="z-50 relative">
                <h1 class="text-4xl text-gray-200 font-bold">Sobre mi :</h1>
                <p class="text-4xl font-semibold text-gray-300">"Talento y creatividad"</p>
            </div>

            <div class="absolute top-0 text-gray-800 left-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6/12" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
            </div>
        </div>

        <div class="left-0 right-0 px-10 md:px-20 absolute text-gray-50 bg-gray-900">
            <!-- Chat 1 -->
            <div class="grid grid-rows-2 grid-flow-col gap-4 relative">
                <div
                    class="row-span-3 px-4 p-4 bg-indigo-600 rounded-t-xl rounded-bl-xl rounded-br-none shadow-2xl flex items-center">
                    <p class="text-xs sm:text-sm">Un humano con muchas facetas y cualidades que me definen como un
                        desarrollador, diseñador web, e ingeniero en sistemas 😉</p>
                </div>
                <div class="row-span-3 col-span-2 relative flex justify-center items-center p-5 sm:p-10">
                    <img class="absolute object-cover bottom-0 rounded-full bg-red-50 sm:w-2/3"
                        src="https://i.ibb.co/gMMkVsf/SobreMi.png" alt="" />
                </div>
            </div>
            <!-- Chat 2 -->
            <div class="grid grid-rows-2 grid-flow-col space-y-2 gap-4 relative mt-2">
                <!-- Bot -->
                <div class="row-span-2 relative flex justify-center items-center p-5 sm:p-10">
                    <img class="absolute object-cover bottom-0 rounded-full bg-red-50 sm:w-2/3"
                        src="data:image/png;base64,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"
                        alt="" />
                </div>
                <!-- Mensajes -->
                <div class="row-span-2 col-span-12 space-y-2">
                    <div
                        class="px-4 py-2 bg-indigo-600 rounded-t-xl rounded-bl-none rounded-br-xl shadow-2xl flex items-center">
                        <div>
                            <p class="text-xs py-1 font-semibold text-indigo-50">Botkyt • <i
                                    class="font-normal not-italic">En linea</i></p>
                            <p class="text-xs sm:text-sm">! Hola Soy Botky, yo seré tu guía en todo el recorrido del
                                portafolio.</p>
                        </div>
                    </div>
                    <div
                        class="px-4 py-2 bg-indigo-600 rounded-t-xl rounded-tl-none rounded-br-xl rounded-bl-xl shadow-2xl flex items-center">
                        <p class="text-xs sm:text-sm">¿ Te gustaria saber que proyectos ha hecho mi creador ?. 🤖</p>
                    </div>
                </div>
                <div class="sm:col-span-3"></div>
            </div>
        </div>
    </div>

    <!-- Flecha -->
    <div
        class="bg-gray-900 absolute bottom-0 left-0 right-0 py-2 flex items-center justify-center rounded text-gray-50 animate-pulse">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
    </div>
    <!-- Imagen portada -->
    <!-- <div class="flex justify-center items-center rounded-full h-screen">
      <img class="object-cover h-full w-full opacity-20" src="https://images.pexels.com/photos/3747070/pexels-photo-3747070.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
    </div> -->

    <footer class="bg-indigo-900 h-screen"></footer>
</body>

</html>