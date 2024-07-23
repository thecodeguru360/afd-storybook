import { PropTypes } from "prop-types";
import cn from "classnames";

export const AfdCheckbox = ({
  id,
  name,
  label,
  checked,
  value,
  isRequired,
  error,
  disabled,
  onChange,
}) => {
  const elementClassList = cn({
    "slds-form-element": true,
    "slds-has-error": error,
  });
  return (
    <div className={elementClassList}>
      <div className="slds-form-element__control">
        <div className="slds-checkbox">
          {isRequired && (
            <abbr className="slds-required" title="required">
              *
            </abbr>
          )}
          <input
            type="checkbox"
            name={name}
            id={id}
            value={value}
            checked={checked}
            disabled={disabled}
            onChange={onChange}
          />
          <label className="slds-checkbox__label" htmlFor={id}>
            <span className="slds-checkbox_faux"></span>
            <span className="slds-form-element__label">{label}</span>
          </label>
        </div>
      </div>
      {error && (
        <div className="slds-form-element__help" id={id}>
          {error}
        </div>
      )}
    </div>
  );
};

AfdCheckbox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  checked: PropTypes.bool,
  value: PropTypes.string,
  isRequired: PropTypes.bool,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};
