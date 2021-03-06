import SelectField from "./selectfield";

export default class AutocompleteField extends SelectField {
  constructor(def, model) {
    super(def, model);
    const { options } = this;
    if (!options.classes) {
      options.classes = "govuk-input--width-20";
    }
  }
}
