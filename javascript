var career = {
    companyName: "eMoney",
    positionAvailable: ["Engineer", "Advisor", "Product Manager", "Director"], 
    positionFilled:[],
    salary: 100000.00,
    
    unFilledPositions: function() {
        return this.positionAvailable.length;
    },
    positionsAlreadyFilled: function() {
        return this.positionFilled.length;
    },
};
    
