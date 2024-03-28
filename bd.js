const mongoose = require('mongoose')

const url = 'mongodb+srv://williamrocha2002:CFXNd0CYKbGWZHWu@api.gh7q6bi.mongodb.net/?retryWrites=true&w=majority&appName=API'; 

const dbName = 'Api'; 

async function connectToMongoDB() {
    let client;
 
    try {
        
        await mongoose.connect(url);

        console.log('Conexão com o MongoDB estabelecida com sucesso.');
                  
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB:', error);
    
    }
}

connectToMongoDB();  
