const patientSchema = new mongoose.patientSchema({
    patientname:{
        type: String,
        required: true

    },
    patientDateOfBirth:{
        type:Date,
        required:true
    }
})