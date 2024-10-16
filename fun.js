    const layout = document.querySelector('#layout');

    document.querySelectorAll('.button').forEach(button => {
        button.addEventListener('click', () => {
            const newContainer = createCart();
            layout.appendChild(newContainer);
            addDragListeners(newContainer);
        })
    });

    function createCart(){
        const container = document.createElement('div');
        container.className = 'container';
        
        container.innerHTML =`
        <input type="text" value="" class="input_title" placeholder="Insert title"> 
        <h2> <span> <i class="ri-menu-line"></i>
            </span> </h2>
        <input class="input" type="text" placeholder="Insert here">
        <br>
        <button class="button"> Add card </button>`;  

        const btn = container.querySelector('.button');
        btn.addEventListener('click', () => {
        const newContainer = createCart();
        layout.appendChild(newContainer);
        addDragListeners(newContainer);
        });

        const new_input = container.querySelector('.input_title');
        const new_heading = container.querySelector('h2 span');
        new_heading.style.display = 'none';

        new_input.addEventListener('change',() => {
            if(new_input.value === ''){
                new_heading.innerHTML = "untitled <i class='ri-menu-line'></i>";
            } else {
                new_heading.innerHTML = ` ${new_input.value} <i class='ri-menu-line'></i> `;
            new_heading.style.display = 'block';
            new_input.style.display = 'none';
        }}
    );
        
        return container;
    }

