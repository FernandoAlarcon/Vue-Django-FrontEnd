<template>  
    <div class="container-fluid" >
        <div>
            <nav class="flex py-3 px-5 text-gray-700 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb">
                <ol class="inline-flex items-center space-x-1 md:space-x-3">
                    <li class="inline-flex items-center">
                        <router-link to="/" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                            <svg class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                            Home
                        </router-link>
                    </li> 
                </ol>
            </nav>
            <div class="flex py-3 px-5 text-gray-700 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb"  >
                <p>
                    Gracias por la oportunidad, esta landing fue echa en node por mi, reposa en <a href="https://dashboard.heroku.com/apps" target="_blank" >"Heroku"</a> , y la puedes
                    encontrar <a href="https://app-page-node.herokuapp.com/" target="_blank" >"aqui"</a> pero la llame con 
                    <a href="https://developer.mozilla.org/es/docs/Web/HTML/Element/iframe" target="_blank" > "iframe" </a>
                    ,en sus funciones viene con sockets, un slide entre otros, si encuentras el chat y lo abres en 2 navegadores diferentes, 
                    podras charear con tigo mismo, o con alguien que se la encontro.
                </p>            
            </div>
        </div>

        <iframe id="inlineFrameExample"
            title="Inline Frame Example"
            width="1000"
            height="1000"
            src="https://app-page-node.herokuapp.com/">
        </iframe>
    </div>
</template>  
<script>
 
//import BreadCumbs from '../components/BreadCumbs.vue'

export default { 
    name: "index-component",
    components:{
        //BreadCumbs
    },
}
</script>