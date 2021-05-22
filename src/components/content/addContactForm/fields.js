export const fields = {
    nameContact:{
        placeholder: "Name",
        autoComplete: "off",
        type: "text",
        name: "name",
        title: "Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п.",
        required : "required"
    },
    numberContact: {
        placeholder: "Number",
        autoComplete: "off",
        type: "tel",
        name: "number",
        title: "Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +",
        required : "required"
    }
}