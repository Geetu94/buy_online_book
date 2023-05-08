const product = [
    {
        id: 0,
        image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSXKgTXbbSh73Y3ooSMYOC0B8IY7HMbpl9fynnvfYPQO79kt5B-G-XktlxFHxCQQbQItKpd2KCJU-KY0NL5EaKGSP95gezvpC49FDT-dh4&usqp=CAE',
        title: 'When I am with you',
        price: 120,
    },
    {
        id: 1,
        image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRTM180QwBjzo6aL-oyA3wOShHBZ9NdR_ET1KSO3H-GTOZt62zBs_k4VaG9dojJ5HpVggEck5ep9XFn1QHmeGDP70cL_llQ-bcQhjJEtBO0&usqp=CAE',
        title: 'Six of Crows',
        price: 60,
    },
    {
        id: 2,
        image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSjxSPxSlQDmY963IdhhPT6GTUi9-uceCopprXlb95CB7dRHzveO7iF0xP0osHinDykgc7uJSKe7bFp-oWTHmtx8zdMZvi2GLGJRtzWO7bSYCoG_7mmgyND&usqp=CAE',
        title: 'Mooshik and his Books  ',
        price: 230,
    },
    {
        id: 3,
        image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQe_cHb0Uh5faoDu07ObgK-JYO7tylPpsakCLIOOG3M5XbRckAT7z46fHuxp3rD7mp7u4sfS6nKKtANyi-th1qsJ1JsjqpQUOzCarUVOu8&usqp=CAE',
        title: 'The Song of Achilles',
        price: 100,
    },
    {
        id: 4,
        image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS7J8Ujo_n0G9YR1UjslfadqKW3ZLghVKsf-fP4BCvsKa_D_3D17e4rLG7H0HY5MEdpyR27HUuOsd1zzlnlQmAF3aL3gn9NMvNqx8DXBJNs&usqp=CAE',
        title: 'Spy X Family Vol. 1',
        price: 230,
    },
    {
        id: 5,
        image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRdv47u9fxAbdLx0jZ75EPc0s_rBQrMoq6Fz5T6ZU2LFJXRro08XgxpYHvDFbQAKJFb9xLFJ1n1nLTwvmKDvf8sL1dk3PnzJB20_ZxSuFZsab6QrmSR__7WZA&usqp=CAE',
        title: 'Life too Short',
        price: 100,
    },
];


document.getElementById('searchBar').addEventListener('keyup', (e) => {
    const searchbox = e.target.value.toLowerCase();
    const filtered = data.filter((item) => {
        // console.log(item.title.toLowerCase().includes(searchbox))
        return (
            item.title.toLowerCase().includes(searchbox)
        )

    })
    displayItem(filtered)
});

  
const data = (product.map((item) => {
    return item
    }
    ))
const displayItem = (items) => {
    document.getElementById('root').innerHTML = items.map((item) => {
        var { image, title, price } = item;
        return (
            `<div class='box'>
                <div class='img-box'>
                    <img class='images' src=${image}></img>
                </div> 
                <div class='bottom'>
                    <p>${title}</p>
                    <h2>$ ${price}.00</h2>
                <button>Add to cart</button>
                </div>
            </div>`
        )
    }).join('')
};
displayItem(data);
