const patientSchema = new mongoose.patientSchema({
    patientname:{
        type: String,
        required: true

    },
    patientDateOfBirth:{
        type:Date,
        required:true
    },
    patientContactDetails:{
        type:String,
        required:true
    },
    patientNextOfKin:{
        type:String,
        required:true
    }
})