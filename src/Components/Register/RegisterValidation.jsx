import * as Yup from 'yup'
import "yup-phone"

export const registeredSchema=Yup.object({
    name: Yup.string().min(2,"Name must be at least 2 characters").required("Please Enter Your Name"),
    email: Yup.string().email("Invalid Email").required("Please Enter Your Email"),
    phone: Yup.string().phone( null,true,"Invalid Phone Number ").min(10,"Phone must be greater than or equal to 10").required("Please Enter Your Phone Number"),
    gender: Yup.string().required("Please Select Your Gender"),
    city: Yup.string().min(2,"City must be at least 2 characters").required("Please Enter Your Name"),
    yop: Yup.number().required("please Select PassOut Year "),
    course: Yup.string().min(5,"Course must be at least 5 characters").required("Please Enter Your Interested Course"),
    referral:Yup.string().min(2,"Referral Name must be at least 2 characters"),
    query:Yup.string().min(5,"Your Query must be at least 5 characters")
})