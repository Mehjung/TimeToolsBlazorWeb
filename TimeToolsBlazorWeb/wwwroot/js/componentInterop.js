window.setCheckboxIndeterminateState = function (customId, indeterminate) {
  const checkbox = document.querySelector(`[data-custom-id="${customId}"]`);
  console.log("State changed to indeterminate: " + indeterminate + " for checkbox with customId: " + customId + " and checkbox: " + checkbox);
  if (checkbox) {
    checkbox.indeterminate = indeterminate;
  }
};
