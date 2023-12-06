
class ProductManager{

    // Variable estatica que pertenece a la clase
    static ultId = 0;

    // Desarrollamos el constructor con el array vacío
    constructor () {
        this.products = [];
    }


// Métodos

addProduct (title, description, price, img, code, stock){


// Validación de campos mandatorios

if (!title || !description || !price || !img || !code || !stock)
{
    console.log ("Complete todos los campos");
    return;
}

// Validación de que hay un solo código

if (this.products.some (item => item.code === code)){
    console.log ("El producto ya existe");
    return;
}

const newProduct ={
    id: ++ProductManager.ultId,
    title,
    description,
    price,
    img,
    code,
    stock
}

// Lo agrego al array

this.products.push (newProduct);
}

getProducts (){
    console.log (this.products);
}

getProductByID (id){
    const product = this.products.find (item => item.id ===id);

    if (!product){
        console.log ("Producto no encontrado");
    } else {
        console.log ("Producto encontrado:", product);
    }
    return product;
}
}

//testing

const manager = new ProductManager();

manager.addProduct ("Lampara", "de pie", 100, "sin imagen", "abc123", 25);

manager.addProduct ("Sillon", "dos cuerpos", 500, "sin imagen","abc124", 20)

manager.getProducts();