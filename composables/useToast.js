export default () => {
  const { $swal } = useNuxtApp();
  const toast_success = (text) => {
    return $swal.fire({
      position: "bottom-end",
      icon: "success",
      text,
      showConfirmButton: false,
      timer: 2500,
      toast: true,
    });
  };
  const toast_error = (text) => {
    return $swal.fire({
      position: "bottom-end",
      icon: "error",
      text,
      showConfirmButton: false,
      timer: 2500,
      toast: true,
    });
  };
  const toast_warning = (text) => {
    return $swal.fire({
      position: "bottom-end",
      icon: "warning",
      text,
      showConfirmButton: false,
      timer: 2500,
      toast: true,
    });
  };
  const toast_info = (text) => {
    return $swal.fire({
      position: "bottom-end",
      icon: "info",
      text,
      showConfirmButton: false,
      timer: 2500,
      toast: true,
    });
  };
  const toast_question = (
    text,
    confirmButtonText = "Yes",
    cancelButtonText = "No"
  ) => {
    return $swal.fire({
      text,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText,
      cancelButtonText,
      toast: true,
    });
  };
  const modal = (
    html,
    confirmButtonText = "Save",
    cancelButtonText = "Cancel"
  ) => {
    return $swal.fire({
      html,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText,
      cancelButtonText,
    });
  };
  const image = (
    url,
    confirmButtonText = "Close",
    cancelButtonText = "Delete",
    alt = "image"
  ) => {
    return $swal.fire({
      imageUrl: url,
      // imageHeight: 1500,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      imageAlt: alt,
      confirmButtonText,
      cancelButtonText,
    });
  };

  return {
    toast_success,
    toast_error,
    toast_warning,
    toast_info,
    toast_question,
    modal,
    image,
  };
};
