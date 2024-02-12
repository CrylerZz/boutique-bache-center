let logo = '/ress/img/bache-center-logo.png';


class Header extends HTMLElement{
    constructor() {
        super();
    }
    connectedCallback(){
        this.innerHTML = `
        <header class="sticky top-0 p-3 z-50 bg-black">

            <div class="max-w-container grid grid-cols-3 items-center py-2">
                <nav class="flex">
                    <ul class="flex items-center justify-center gap-8 uppercase font-extrabold ">
                        <li><a class="text-white hover:text-[#ef1d1e]" href="/" title="">Home</a></li>
                        <li><a class="text-white hover:text-[#ef1d1e]" href="/" title="">Shop</a></li>
                        <li><a class="text-white hover:text-[#ef1d1e]" href="/" title="">About</a></li>
                        <li><a class="text-white hover:text-[#ef1d1e]" href="/" title="">Contact</a></li>
                    </ul>
                </nav>
                <div class="mx-auto">
                    <a href="/" title="Bâche Center" class="h-16 block">
                        <img src="` + logo + `" alt="" class="h-28"/>
                    </a>
                </div>
        
                <div class="flex justify-end">
                    <div class="flex items-center justify-center rounded-full hover:bg-white/10 h-14 w-14 cursor-pointer">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 19.1115C5 16.6984 6.69732 14.643 9.00404 14.2627L9.21182 14.2284C11.0589 13.9239 12.9411 13.9239 14.7882 14.2284L14.996 14.2627C17.3027 14.643 19 16.6984 19 19.1115C19 20.1545 18.1815 21 17.1719 21H6.82813C5.81848 21 5 20.1545 5 19.1115Z" stroke="#ffffff" stroke-width="1.5"/>
                            <path d="M16.0834 6.9375C16.0834 9.11212 14.2552 10.875 12 10.875C9.74486 10.875 7.91669 9.11212 7.91669 6.9375C7.91669 4.76288 9.74486 3 12 3C14.2552 3 16.0834 4.76288 16.0834 6.9375Z" stroke="#ffffff" stroke-width="1.5"/>
                        </svg>
                    </div>
                </div>
            </div>
        
        </header>
        `
    }
}
class Footer extends HTMLElement{
    constructor() {
        super();
    }
    connectedCallback(){
        this.innerHTML = `
        <footer class="relative">
            <form class="max-w-container pt-32 mb-32 flex flex-col items-center justify-center w-full space-y-10">
                <p class="text-white uppercase font-extrabold text-4xl relative w-fit px-2 text-center
                     before:absolute before:inset-x-0 before:h-4 before:bottom-0.5 before:bg-[#ef1d1e]/70 before:-z-10">Newsletter</p>
                <p class="text-white text-lg  tracking-wide">Inscrivez-vous à notre newsletter pour suivre notre actualité.</p>
                <div class="bg-white rounded-lg flex items-center gap-4 p-1 w-max">
                    <input type="text" placeholder="ENTER YOUR MAIL" class="input-newsletter"/>
                    <div class="bg-[#ef1d1e] hover:bg-white hover:text-[#ef1d1e] cursor-pointer py-4 px-6 uppercase text-white font-bold w-fit rounded-lg text-xs">S'inscrire</div>
                </div>
        
            </form>
            <div class="max-w-container grid grid-cols-4 gap-4 pb-24">
                <div class="space-y-6">
                    <p class="uppercase font-extrabold text-white">Customer Care</p>
                    <div class="space-y-4 flex flex-col">
                        <a href="/" title="faq" class="text-sm text-white hover:text-red-500">FAQs</a>
                        <a href="/" title="faq" class="text-sm text-white hover:text-red-500">Accessibility Statement</a>
                        <a href="/" title="faq" class="text-sm text-white hover:text-red-500">Terms of Service</a>
                        <a href="/" title="faq" class="text-sm text-white hover:text-red-500">Privacy Policy</a>
                        <a href="/" title="faq" class="text-sm text-white hover:text-red-500">Contact Us</a>
                    </div>
                </div>
                <div class="space-y-6">
                    <p class="uppercase font-extrabold text-white">Customer Care</p>
                    <div class="space-y-4 flex flex-col">
                        <a href="/" title="faq" class="text-sm text-white hover:text-red-500">FAQs</a>
                        <a href="/" title="faq" class="text-sm text-white hover:text-red-500">Accessibility Statement</a>
                        <a href="/" title="faq" class="text-sm text-white hover:text-red-500">Terms of Service</a>
                        <a href="/" title="faq" class="text-sm text-white hover:text-red-500">Privacy Policy</a>
                        <a href="/" title="faq" class="text-sm text-white hover:text-red-500">Contact Us</a>
                    </div>
                </div>
                <div class="space-y-6">
                    <p class="uppercase font-extrabold text-white">Customer Care</p>
                    <div class="space-y-4 flex flex-col">
                        <a href="/" title="faq" class="text-sm text-white hover:text-red-500">FAQs</a>
                        <a href="/" title="faq" class="text-sm text-white hover:text-red-500">Accessibility Statement</a>
                        <a href="/" title="faq" class="text-sm text-white hover:text-red-500">Terms of Service</a>
                        <a href="/" title="faq" class="text-sm text-white hover:text-red-500">Privacy Policy</a>
                        <a href="/" title="faq" class="text-sm text-white hover:text-red-500">Contact Us</a>
                    </div>
                </div>
                <div class="space-y-6">
                    <p class="uppercase font-extrabold text-white">Customer Care</p>
                    <div class="space-y-4 flex flex-col">
                        <a href="/" title="faq" class="text-sm text-white hover:text-red-500">FAQs</a>
                        <a href="/" title="faq" class="text-sm text-white hover:text-red-500">Accessibility Statement</a>
                        <a href="/" title="faq" class="text-sm text-white hover:text-red-500">Terms of Service</a>
                        <a href="/" title="faq" class="text-sm text-white hover:text-red-500">Privacy Policy</a>
                        <a href="/" title="faq" class="text-sm text-white hover:text-red-500">Contact Us</a>
                    </div>
                </div>
            </div>
            <div class="border-t-2 border-gray-900 text-xs text-white py-12">
                <div class="max-w-container grid grid-cols-2">
                    <div><a href="/" title="" class="hover:text-red-500">Copyright © 2024</a> Bâche Center. Tous droits réservés.</div>
                    <div class="flex items-center justify-end gap-4">
                        <a href="/" title="" class=" hover:text-red-500">Politique de confidentialité</a>
                        <a href="/" title="" class=" hover:text-red-500">Mentions légales</a>
                        <a href="/" title="" class=" hover:text-red-500">Conditions générales de ventes</a>
                    </div>
                </div>
            </div>
        </footer>
        `
    }
}

customElements.define('header-component', Header);
customElements.define('footer-component', Footer);
