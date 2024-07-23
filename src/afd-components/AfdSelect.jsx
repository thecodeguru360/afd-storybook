import { PropTypes } from "prop-types";
import cn from "classnames";

export const AfdSelect = ({
  id,
  name,
  label,
  options,
  isRequired,
  disabled,
  error,
  placeholder = "Select…",
  value = "",
  onChange,
}) => {
  const elementClassList = cn({
    "slds-form-element": true,
    "slds-has-error": error,
  });
  return (
    <div className={elementClassList}>
      {label && (
        <label className="slds-form-element__label" htmlFor={id}>
          {isRequired && (
            <abbr className="slds-required" title="required">
              *{" "}
            </abbr>
          )}
          {label}
        </label>
      )}
      <div className="slds-form-element__control">
        <div className="slds-select_container">
          <select
            className="slds-select"
            name={name}
            id={id}
            value={value}
            disabled={disabled}
            onChange={onChange}
          >
            <option value="">{placeholder}</option>
            {options.map((option, i) => (
              <option key={i} value={option.value}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      {error && <div className="slds-form-element__help">{error}</div>}
    </div>
  );
};

AfdSelect.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.arrayOf({
    name: PropTypes.string,
    value: PropTypes.string,
  }),
  value: PropTypes.string,
  isRequired: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};
