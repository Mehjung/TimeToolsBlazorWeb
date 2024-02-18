window.setCheckboxIndeterminateState = function (customId, indeterminate) {
  const checkbox = document.querySelector(`[data-custom-id="${customId}"]`);
  if (checkbox) {
    checkbox.indeterminate = indeterminate;
  }
};
