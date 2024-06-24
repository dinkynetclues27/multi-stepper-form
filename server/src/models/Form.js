const {Model} = require("sequelize");
module.exports=(sequelize,DataTypes)=>{
    class Form extends Model{

    }

    Form.init(
        {
            userId:{
                type:DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            firstname:{
                type:DataTypes.STRING
            },
            lastname:{
                type:DataTypes.STRING
            },
            Email:{
                type:DataTypes.STRING
            },
            Phone:{
                type:DataTypes.STRING
            },
            DOB:{
                type:DataTypes.DATE
            },
            Address1:{
                type:DataTypes.STRING
            },
            Address2:{
                type:DataTypes.STRING
            },
            city:{
                type:DataTypes.STRING
            },
            state:{
                type:DataTypes.STRING
            },
            postal_code:{
                type:DataTypes.STRING
            },
            company_name:{
                type:DataTypes.STRING
            },
            company_type:{
                type:DataTypes.STRING
            },
            industry:{
                type:DataTypes.STRING
            },
            companysize:{
                type:DataTypes.STRING
            },
            contact_person:{
                type:DataTypes.STRING
            },
            contact_email:{
                type:DataTypes.STRING
            },
            contact_phone:{
                type:DataTypes.STRING,
            },
            company_address1:{
                type:DataTypes.STRING
            },
            company_address2:{
                type:DataTypes.STRING
            },
            company_city:{
                type:DataTypes.STRING
            },
            company_state:{
                type:DataTypes.STRING
            },
            company_postalcode:{
                type:DataTypes.STRING
            },
            photo:{
                type:DataTypes.STRING
            },
            address_proof:{
                type:DataTypes.STRING
            },
            payment_amount:{
                type:DataTypes.STRING
            },
            payment_method:{
                type:DataTypes.STRING
            },
            // credit_card_number:{
            //      type:DataTypes.STRING
            // },
            expiration_date:{
                type:DataTypes.STRING
            },
            cvv_code:{
                type:DataTypes.STRING
            }
        },{
            sequelize,
            modelName: "Form"
        }
    )
    // Form.sync({force:true});
    // Form.sync({alter:true})
    return Form
}