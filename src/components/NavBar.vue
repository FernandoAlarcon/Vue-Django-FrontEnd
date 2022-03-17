<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div>    
    <nav class="bg-dark border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-dark-800">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
            <p class="flex items-center">
                <img  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBISDxISEhIPEhIMDw8PDwwMDxEJEhAMJRQnJyUhJCQpLjwzKSw4LSQZJjo0ODE1Nzc4KCQ7QDs1PzFCNz8BDAwMDw8QGBIPGD8dGR0xMTQxPzExMTQxMTE0MTE/Pz8/NDQ0ND8xNDQxPz8xMTExMTExMTExMTExMTExNDExMf/AABEIAMgAyAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAIDBQYBB//EADoQAAIBAwIDBQYFAgYDAQAAAAECAAMRIQQxBRJBBiJRYXETMoGRobFCUnLB8GLRBxQVI4LhM1PxJf/EABkBAAMBAQEAAAAAAAAAAAAAAAECAwAEBf/EACMRAAMAAgIDAAIDAQAAAAAAAAABAhExAyESMkFRYSJCcQT/2gAMAwEAAhEDEQA/APZLzhiU4itIvLSCQN73yk8jZe8DJRBC7YaejsqOKL30P5bH6y3lZxL3l9P3h5fUbi9gukbp8IIjZPkTDKXuCUfGdb/l6FWqBfkBKrtzOTYD5yL+DztgnbHjwo0fZo1qlewuuSidT8dp5sikB3LMBUBVuYBi2ekfqUqVqod2BZ0NRuY2CknA+0B1rcp5BkL3WJuO9fMql0bCXR2tUTZLbkEC4xOJQYnCn7SThunLve2PPM0FLSgb7xavHRSZyUqaQ+EKTRY2H2zLX2YjLSfm2UUJFaNL5RHR/vLK0cLTebA4RUnSeRkTaciXnIDOGkPASiti1CZnWJEcGlpqdID0lRWQqTeUmkyVS0Sox6z0vsHrlegaZtzUb5sAeQnr9Z5ZzzQ9kuKtQr4XmWpyqyj3rX3HnGf5J4yevyKogJW/4Tcesbp66uodTdWFxKPUdoeSuyCk7Bbr4Em+8DaaFWS81S9xh4i0Uo14vXqBuTTPZbWurIG+JtFFe9DLRoE2jjGKZ0NAqWMAaHRCRM8lBhmlkDR2VvE+n86yylXxY+78YOX1H4vZExrFKYKoznoqco+pIEx3bfUVjpSfZlF9ojP+Mhb/APybTSnuCZj/ABArcmjcf+1lTPreTXeB56pnm2s1diQDYgCy938uMiVJdmJJNyTk+MT2Pr4ztNcgecsHHZf8CFuu8vTbeV3CdLZAxxeGVXA8vpOWnlnTKwjrvIyY0utrllHqQJz21MY51v4XBipMOUd5jJFJjqYVtiJL7Lwh0bZHeOBjmSRlDCBo6y3lXxGhdTjxlkX6GQ11uvzjy8MSlky+2POH6CpyuuSAbcxW9+W8D1S2c/zMm0zDnXmuRzLzdO7fM6No58YZ6twjiqtRD01Zyt1qqoC81tmHna0udNXDqGRQAwwdsTP9j9L7OtqlFzTVkFM593P/AFNSiAE2FuY3I8/GKk/jJ1hMb3z1A+EUnij+P7BkgQ/tOruY1DiPAzeQGZAcZkyNiC12t8DJKbXAP0gT7Hc5WQsGVnGD3V9f2liu0q+M+6n6v2jW8yLx+yC9Ee4PQTzr/E7iSM1OgpDPSJdyD7rWwJ6JojdB6CeLdq6XJqXVr8/PVaoTcnnNQ2+FuWafg/8AZlGxsP4JoeAcJ5x7SoO70HiZRaKl7SqidGIH1nolOlyoFUWCgDw6ReWsLCLcc57YDqq1u4guV6DYCVtbS1GyWv5e7mXVRQi267k43lc7lttvGRllnOSv/wBO8WH3jf8ASUvv9esNKHqZA5scGVTYrlBGh0nsyMmx653l2q4lNpqtyBvtLmlmJT77CpwdCCDV66IckDeF1GCg3lNqtOr+9GlIWmwjnp1L8rA79esi8QfO0rRw4g3RyPDMea9RSA2bYJAjeP4Ez+Sq1/8A5D6xqb9ceH5p3iL/AO6T0IBnNEnO6gmwYi5zLLRGtns/ZXmbTLVdSrVgp5SQe6BYH7y8lZwLTNT01JGJJVFvzEsQfCWkdaIvYoooowAGg2T1xiTe0ztI0Wxt8o7lN5ydoq8Ng+oGT5TtJo6ql732kaDPpi8GmOu5D02lZxr3F/UPtLNdvlKzjR7noyxr9ROP2RNw73B5gfaeU/4mN/8AoN5U6fS3SbxuNrQCJyl2ZQbX5LCefdva/t9StZEZV9mqPzAYcEwRS6RWopNvHRWdmaBfUr/QCxm7taZ7sZpbU3qHd25V/SBL/UNYWkuWs0dHHOJKniWpVbljgXlNU4uGDezRm5Rc/hxLbX6bnG2ZUvoyMAD6riaXP0alXwr/APW2/IBkY58ydtUbgMCpPjtIv9LAN+UA4O5OYTR0bMwJBY+LZlXU/CczWew7QDI+Et2r8toJptMVsSNvhCKlMkSLeWWUi1mpHKPOVzVwTbr85NrKZ5MbreZnWV6iOOUtbPMeUHN5WVlEaeNmpROoMm9mG3EpeG6qqUZ7LURLczLdG2lroNUlTKm/lsRGaa2ImqM5xmny1QPK/wALy+7K6YPp9SWAJVtOUthvalrCUvaIn/NHw5VtNT2G0JfUIEN6aJR1FUXIHtQbgeef3lFpEK6bPUaYPKt9wBfpm0kiiliIooopjFaNSt7i5HiLTraxQRg96/hB6GkcEnxvg73nH0rnlxte/wA5yZZ0YgfqOIKAb8wwfCDUNerAWDHOwHNYecbq9C7DA8YDR4dVVgbdfERabyUlRg1dNrqD4gSs40O4fIr95YadSEAO9pX8ZF0ceQ+8evUjx+5jXcVK5O4Wyg+QkWoppUSopAswYXIv3bSKi/s6bMdwxX6wPT1alSo3esio3dsBc2nMeo56LHgen9np6a+RP1hrJc5kemNkUeCj7R7PA+yaRFUpiCvRElfUAEKT723rOPmHAyBW06+EfTQA2AEc4kHtM2G52tCHAXyg4j69got/DIUoWtd9ugucSYspAA2HXzmSyAEK3ME1PCwTzL16S3qJ3cWuLW6xqNjI+HnKLKJ0k2UA0RHTGcWhGl0oRuYC19wMZl17MRracfOHyYjlIyXaBb6lcgBkUFmwBmbfsBRstRrPaqUPNS9oBYYCk7eJ36ygbhbVtfRQA8rcgfBN058j5XnrdKkqKqooVVwFUBAB6S8dpHJyPDJQJ2KKWIiiiimMQIY4xlMxxM5h3s5U2kHWTOcSAmBjzoLU4lRxd7XH5hn0lqhxKji5uSM5EFvoPCv5mL19PFSntz95L4F4DSo1Ep35QCbhiWHuzTPohVQj8SsbekrdbTFNCD+FTubm9pznpeXwbpnug9BJGME4e96Y8Lb7SYPczNCnHW56SS06i3jnGIMhQJX/ALytepyuGyQpz1xaWVdbjwEBcKOo9IyYcoqteXqVFNOq9Mg5AJGPSWdB3As5JNxZrcpIkC6pQe6LkdQLQl9QMdCSPKOnkm/yiLV6mutRAhQU/wAVxzMTLajU5rHrYX9YDVCvYkZFs7Yk1Huwt5AixWSCRIcRweBCUy/7MadS1SoQOZeVVPULmaMnK+p+0puzlPloA9ajs3w2lwT3lHkTOjjOG/ZksUUUuIKKKKYwDSaTAwZMGTE/zynIWpdnScQdzJC28GdpmNKDUbEq+Jt3s3sR0xD0PdEreJHJv+UwVobjX8gLhjd0/qO3pDNdw6lUF3QMeXxK9JXcLa6H9R2x0l4uV9RJyX5G000YLR+4BbY2tJG3x5W+cGR+SpUQ/gqOPhzQgv1tFeyqfRMrWzvteKo/1kQe4x0EaXNooSu4hq8kZAX1leuup/hALHdmzLdtOGyc3gWo0FO9woBHWwEpLWmbxYGdZnoP0gDEmp1r75HoDmOsuzKPlOCjTJtYj9JIlVg3j+whKwIsfmJPQqlcMcdG3xAn0oAupPzJjKVKtgMBygkjcm0DSJVlGi074xkdD5SUm5A8SB8YHo1Kp/NpYcGQvqUHRW5m64EVE7fRt9HTCIqj8CqvxtJAf90DwRj9ROIRI6TX1Df001HzMrG0clIOiiinSIKKKKYwAoxHNGUzgRzTkL/RsGqHMJglf3h8YGPITTPdEr+I+9/xh9P3YBxD3h6fvA9DR7FVwtu636v2l9TawB32uPKZzhpsX8mEuhUULZsWBN79JOWW5JykYrjqcmqqNsGct4Yg9PUXx6iN1HERqud7AHndeUZst8fS0p2rNTfvX5Djm35fWFoK6RoaVTNvSSOw+cqtNqBjN7/aS1K98A9MxfHsfyDOeNdb7wenW9PnfMJLi3ymCmBVqYzv088yGnRbm3FvGGOwPSORAM2lFWAND6Onx6dYV7MRivba3oZFV1VjuPObZOugis9hiX/ZPTWV6pHvd1emOszlFWqutNLXe3nib2hTFOmqLsiAQ6I089BStB+HPfUVv6Vpj7x3PZb+RxBOz9Xnq6punPTA9LGNGyNLpl/FORTqyROxRRQmK2ge7HsYNQaTsZyHT9FeB6n3x6QkmC6j3x6fvBQ87J6R+vwgfEfeHpC0OBt4fGA8Q3HofvFegz7FPoG79Qf1D7ybtBqhT0lRr55CgsR7xx/PSCaU2rOPHm+8pO22s9ykpwoLuNu9fH884vHOawW5axOTHnUPTfmQ2J3U5BEOTiNOqtm7rEZVrWMqajQVxOx8aZyTytf4Xau1M3W5X8oubQihrgSLEdT9JnU1bpi9x+Vs4j/8wrZB5G89iZN8T+lVyy9GmWuM5zfEM01bxIzMmmsIsDg4v1xLHS6vIP8A3JOGUmzTIBvJgwIlbptVcG5HUESVNUL2O2/xm8RvLIWzWEq9TWyfl4Zkus1oCi1rE26QDhVdG1unV7FGroDmwteGYZK6PROyvCzRpCpUt7SqAQM9xJdV6mPW07qHFsEWNsjPdgtZ7kD4wMmiZnsh+MG7Im41Db82oIv5BRIdbX5UY+ANvWO7GNbTMT+Os5+GIY2LejU3ivMtxbtlp6FRKSXq1XYKFQgKDfqYdwjji1mKMFVrBkIN1df7+UuskC8ijQYo3kYp6ZzCCYCjw0MCB8JzI6jjQSue8PgIUx3gdXLTMyCqW0ruLuFIJIAC5JsoAk2q1tOhSapUYKi9T1NthPJO2Ha59U5SndKS3CrfL53MaYdG8lLyWPFO1a06pFACo9277X5Abb+cz2o171r1HbmZrlmwt2lRQSyM53YED9Mbpq3KLHZifgZeeOZ0SvkqthrNIHMcTiMYypPIxhIismMaRCbIxXI8x4NmEaast7FmTz94QcicKxalMZW0aPT03t3agI8bXxCEoVG3qAf8TvM1p9Q9M3Un9O4lvQ4yoTIIYfG8hUUtF5tPY/X0fZi9SoWJyFXuSu0tc+0V9rMCLdFvBNbrTUfmc2GwXyklEg2z+8pEtdslyUn0jb6Lj1ZRemwqJi/KS1vUS0o9pw5HtAUZbjmW6/SeXabVVKT3RiCpOx85p9BxinXstQKlTADHuKxlnE1tHPmp0bjV8RWpTPIQ3dJKrdmvbwmT1fa2otL/AC9NmpBAebDU3dj4+EIGlqLlUYjcNTZXFvnHsBUHLWoiou3fTmYDyIyIq/55XaC+ZvpmErV6hcuxPMbm9ztNXwXjBagEY2ancBhcEHoZzivAFqd+k7AhVApVyU7oGwb+/wA5T0tBUpHv3UtccoBYwOGtmyno9M7P9qanLyu4YobMrkvdfXpOTD6N3pWqW7qEc6M2XW+RFEx+jZ/Z62hhlNsCV6Xv4/WGU3t5euJyI7mSsZQ8b41T0oJY8zm/JSUi5P7CBdoe1lOkDTolalQXBf30T+5nmnENc1RmZmLMxJZmJJJlo489sjVJaJ+0PHqupfmqN3VvyU1wiD0/eZ1F5mzJXN5Lp0sL/KXU46RLOTmpwth0ECUXBHxhdY3/ALwWmO8RGBkkR7L6faSA3kVM2P8ANpz3TjYzGJTFGq14+Ew2cIjrRWmNkYRBnYlvADEIrNjG5gq7wMw8IOtzJqR5cjp08pFeSoekVGJH0rMxKqWBJPd72IPYg9QR0OJd8NcqinqMfC8tq+gp6hPyuALMABKqc6JusPsreCcdemQrElTbqTbE19PXqy8xAYY7y4Mw+p4NUpnoR+YXGJY8JrNTFjsOkeW10xaSfaNemoW3dJ9DI6hVvI56A5lZvZk36pnPpJKOovvjxBxGFANdpOUOQTZkbGxBihesa4IvbmGG3s3SKT8EHLNpr+L09Ot3JLH3UWxJ/tMdxjtNWr3W/s6ef9tCfqesp9Tqi5JYklslmJJJgFSpf0E5Z40jqrkb0Pr1v55yuqvcySq8jVestoQ4iSW9zbwF8eEYXtgTqCwPnMAZUOf5tBV98ydzIfxn4faZmyOtmOtOmJZjETLbaPR7+RjmWRskyMTAxSNX8fnE7dITETG5J9ZEwktrH9Q+sa4gZhgMehPSMWSqIoxa6F+4Bva1/WaDQahcKcHxmQoVijA/MeUPTWEG9pSKJVOTammGFsSp1XDnB5qe3hAqHHbDIOPOTp2hHVT18DKeSZPDRLpqVQ+8LWtJ9QOt7P8AmOx9YI/HkIwhvAX4kWN5vJBwyyGo5wVOHX8LdRFAk1auRe3Mt+VvCcmybDBK1Tp4bdYO7Y6RRSCLIhM4z+EUUIUcUZkrnEUUwGQOZCff+X2nIpmAmitFFCEcJxhFFAYbaK0UUJhlRfpGsLxRTAISLGSiKKIxjpj0JtOxQzsD0PBnReKKOA6DOgxRTGHK308IoooQH//Z" 
                      class="mr-3 h-6 sm:h-10" alt="Flowbite Logo">
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white" style="color:white">Hi Size solution, Im Fernando</span>
            </p>
            <div class="flex md:order-2">
                <div class="hidden relative mr-3 md:mr-0 md:block">
                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                    </div>
                    <input type="text" id="email-adress-icon" class="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search...">
                </div>
                <button data-collapse-toggle="mobile-menu-3" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-3" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
            <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-3">
                <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                    <li>
                        <router-link to="/" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">
                            Home
                        </router-link>
                    </li>
                   <li>
                        <router-link to="departamentos" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">
                            Departamentos
                        </router-link>
                    </li>
                    <li>
                        <router-link to="empleados" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">
                            Empleados
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav> 
  </div>
</template>

<script>
//import { mapGetters } from 'vuex' 

 export default {
        mounted() { 
        },
        methods: {
            logout() {
              
            }
        }
}
</script>

<style scoped>
.profile-photo {
  width: 2rem;
  height: 2rem;
  margin: -.375rem 0;
}
</style>