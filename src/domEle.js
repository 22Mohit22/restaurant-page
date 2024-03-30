import itemsList from './items.json';

const navBtnHandle = () => {

    const content = document.getElementById('content');

    function clear() {
        content.innerHTML = '';
    }

    function showHomeElements() {
        clear();
        
        content.innerHTML = `
        <div id="imgRestaurant">
            
        </div>
        <div class="home-content">
            <h1>Hours &amp; Location</h1>
            <p>123 Main Street <br> City, Country</p>
            <p><strong>OPEN EVERY DAY OF WEEK!</strong><br>7 AM - 3 PM</p>
            <div id="brief-desc">
                <p>Located in the heart of New York City's vibrant Times Square, The Brunch Haven, affectionately known by locals as "Brunch Central," revolutionizes the brunch scene. Recognized as a top brunch destination in NYC, The Brunch Haven specializes in crafting delectable breakfast, lunch, and brunch delicacies. As an esteemed brunch spot near Broadway, we take pride in our role as trailblazers in the culinary world, delivering an unparalleled dining experience. Whether you're in search of the ultimate brunch in NYC, a delightful breakfast near Broadway, or a lunch spot that seamlessly blends innovation with timeless flavors, The Brunch Haven is your ultimate destination. Join us at The Brunch Haven, where every dish reflects our unwavering commitment to extraordinary brunch experiences.</p>
            </div>
        </div>`
    }

    function showMenuElements() {
        clear();

        const menuContainer = document.createElement('div');
        menuContainer.id = 'menuContainer';

        const foodContainer = document.createElement('div');
        foodContainer.id = 'foodContainer';

        const drinksContainer = document.createElement('div');
        drinksContainer.id = 'drinksContainer';

        const foodHeading = document.createElement('h1');
        foodHeading.textContent = 'Food Items';

        const drinkHeading = document.createElement('h1');
        drinkHeading.textContent = 'Drink Items';
        
        foodContainer.appendChild(foodHeading);
        drinksContainer.appendChild(drinkHeading);


        itemsList.allFoodItems.forEach(food => {
            const itemCard = document.createElement('div');
            itemCard.classList = 'item-card';

            const itemName = document.createElement('h3');
            itemName.classList = 'item-desc';
            itemName.textContent = food.itemName;

            const itemDesc = document.createElement('h3');
            itemDesc.classList = 'item-desc';
            itemDesc.textContent = food.description;
    
            const priceBtn = document.createElement('button');
            priceBtn.classList = 'priceBtn';
            priceBtn.textContent = food.price;

            itemCard.appendChild(itemName);
            itemCard.appendChild(itemDesc);
            itemCard.appendChild(priceBtn);

            foodContainer.appendChild(itemCard);            
        })

        itemsList.allDrinkItems.forEach(drink => {
            const itemCard = document.createElement('div');
            itemCard.classList = 'item-card';

            const itemName = document.createElement('h3');
            itemName.classList = 'item-desc';
            itemName.textContent = drink.itemName;

            const itemDesc = document.createElement('h3');
            itemDesc.classList = 'item-desc';
            itemDesc.textContent = drink.description;
    
            const priceBtn = document.createElement('button');
            priceBtn.classList = 'priceBtn';
            priceBtn.textContent = drink.price;

            itemCard.appendChild(itemName);
            itemCard.appendChild(itemDesc);
            itemCard.appendChild(priceBtn);

            drinksContainer.appendChild(itemCard);            
        })


        menuContainer.appendChild(foodContainer);
        menuContainer.appendChild(drinksContainer);

        content.appendChild(menuContainer);
    }

    function showContactElements() {
        clear();

        content.innerHTML = `
        <h2>Contact Us</h2>
        <p>For reservations or inquiries, please contact us:</p>
        <p>Email: info@thebrunchhaven.com</p>
        <p>Phone: +123-456-7890</p>
        <p>Address: 123 Main Street, City, Country</p>
        <p>Follow us on social media for updates and special offers:</p>
        <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
        </ul>`
    }

    function showAboutELements() {
        clear();
        content.innerHTML = `
        <p>Located in the heart of New York City's vibrant Times Square, The Brunch Haven, affectionately known by locals as "Brunch Central," revolutionizes the brunch scene. Recognized as a top brunch destination in NYC, The Brunch Haven specializes in crafting delectable breakfast, lunch, and brunch delicacies. As an esteemed brunch spot near Broadway, we take pride in our role as trailblazers in the culinary world, delivering an unparalleled dining experience. Whether you're in search of the ultimate brunch in NYC, a delightful breakfast near Broadway, or a lunch spot that seamlessly blends innovation with timeless flavors, The Brunch Haven is your ultimate destination. Join us at The Brunch Haven, where every dish reflects our unwavering commitment to extraordinary brunch experiences.</p>
        `;
    }

    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const clicked = e.target.id;
            if(clicked == 'home') {
                buttons.forEach(btn => btn.classList.remove('active'));
                button.classList.toggle('active');
                showHomeElements();
            }
            else if(clicked == 'menu') {
                buttons.forEach(btn => btn.classList.remove('active'));
                button.classList.toggle('active');
                showMenuElements();
            } else if(clicked == 'about') {
                buttons.forEach(btn => btn.classList.remove('active'));
                button.classList.toggle('active');
                showAboutELements();
            } else if(clicked == 'contact') {
                buttons.forEach(btn => btn.classList.remove('active'));
                button.classList.toggle('active');
                showContactElements();
            }
        })
    })
}

export default navBtnHandle;