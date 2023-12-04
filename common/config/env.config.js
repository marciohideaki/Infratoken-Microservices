module.exports = {
    "port": 3600,
    "appEndpoint": "http://localhost:3600",
    "apiEndpoint": "http://localhost:3600",
    "jwt_secret": "myS33!!creeeT",
    "jwt_expiration_in_seconds": 36000,
    "environment": "dev",
    "permissionLevels": {
        "NORMAL_USER": 1,
        "PAID_USER": 4,
        "ADMIN": 2048
    }
};

module.exports.UserConfig = 
{
    "port": 3001,
    "appEndpoint": "http://localhost:3001",
    "apiEndpoint": "http://localhost:3001",
    "jwt_secret": "myS33!!creeeT",
    "jwt_expiration_in_seconds": 36000,
    "environment": "dev"
};

module.exports.AuthorizationConfig = 
{
    "port": 3000,
    "appEndpoint": "http://localhost:3000",
    "apiEndpoint": "http://localhost:3000",
    "jwt_secret": "myS33!!creeeT",
    "jwt_expiration_in_seconds": 36000,
    "environment": "dev"
};

module.exports.ProductsConfig = 
{
    "port": 3002,
    "appEndpoint": "http://localhost:3002",
    "apiEndpoint": "http://localhost:3002",
    "jwt_secret": "myS33!!creeeT",
    "jwt_expiration_in_seconds": 36000,
    "environment": "dev"
};

module.exports.OrdersConfig = 
{
    "port": 3003,
    "appEndpoint": "http://localhost:3003",
    "apiEndpoint": "http://localhost:3003",
    "jwt_secret": "myS33!!creeeT",
    "jwt_expiration_in_seconds": 36000,
    "environment": "dev"
};