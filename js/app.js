const app = new Vue({
    el: '#app',
    data: {
        list: [
            { imgSrc: "1.png", readAvailable: true },
            { imgSrc: "45.png", readAvailable: false },
            { imgSrc: "12.png", readAvailable: true },
            { imgSrc: "34.png", readAvailable: true },
            { imgSrc: "phuong-nghich-thien-ha.png", readAvailable: false },
            { imgSrc: "56.png", readAvailable: true },
            { imgSrc: "robot.png", readAvailable: true },
            { imgSrc: "hqdefault.png", readAvailable: false },
            { imgSrc: "4.png", readAvailable: true },
            { imgSrc: "truyen-manhua-8.png", readAvailable: true },
            { imgSrc: "78.png", readAvailable: false },
            { imgSrc: "girl-with-classes.png", readAvailable: true },
            { imgSrc: "45.png", readAvailable: true },
            { imgSrc: "45.png", readAvailable: false },
            { imgSrc: "90.png", readAvailable: true },
        ]
    }
})

Vue.component('sidebar', {
    template: `
    <nav class="sidebar">
        <div class="sidebar-content">
            <h1>MOTION STATION</h1>
            <select class="btn btn-outline-secondary btn-block">
                <option value="0" disabled>Choose Language</option>
                <option value="1">English</option>
                <option value="2">Korean</option>
                <option value="3">Vietnamese</option>
                <option value="4">Japanese</option>
            </select>
            <ul class="list-group">
                <li class="list-group-item">
                    <a href="/index.html">
                        <img src="/assets/Group 398.svg" alt="Dashboard">
                        <span>Dashboard</span>
                    </a>
                </li>
                <li class="list-group-item">
                    <a href="/pages/supscriptions.html">
                        <img src="/assets/Group 399.svg" alt="Supscriptions">
                        <span>Supscriptions</span>
                    </a>
                </li>
                <li class="list-group-item">
                    <a href="#">
                        <img src="/assets/Path 242.svg" alt="Premium">
                        <span class="text-premium">Premium</span>
                    </a>
                </li>
                <li class="list-group-item line-bottom"></li>
                <li class="list-group-item">
                    <a href="#">
                        <img src="/assets/Group 400.svg" alt="Upload">
                        <span>Upload</span>
                    </a>
                </li>
                <li class="list-group-item login">
                    <a href="#">
                        <img src="/assets/Avatar.svg" alt="avatar">
                        <span>Name Surname/Log in</span>
                    </a>
                </li>
                <li class="list-group-item line-top"></li>
                <li class="list-group-item">
                    <h6>IMAGES THAT COMES TO LIFE</h6>
                </li>
                <li class="list-group-item social-network">
                    <a href="#" class="icon">
                        <img class="facebook" src="/assets/facebook.svg" alt="Facebook">
                    </a>
                    <a href="#" class="icon">
                        <img class="instagram" src="/assets/instagram.svg" alt="Instagram">
                    </a>
                </li>
            </ul>
        </div>
    </nav>
    `
})
new Vue({ el: '#sidebar-component' })