import PropTypes, { string } from "prop-types";
import cn from "classnames";

export const AfdBadge = (props) => {
  const { children, variant } = props;
  const classNames = cn({
    "slds-badge": true,

    "slds-badge_inverse": variant === "inverse",
    "slds-badge_lightest": variant === "lightest",
    "slds-theme_success": variant === "success",
    "slds-theme_warning": variant === "warning",
    "slds-theme_error": variant === "error",
  });
  return <span className={classNames}>{children}</span>;
};

AfdBadge.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  variant: string,
};
