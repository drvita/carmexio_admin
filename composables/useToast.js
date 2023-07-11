export default () => {
  const { $swal } = useNuxtApp();
  const timer = 3500;
  const position = "bottom-end";

  const toast_success = (text, p) => {
    return $swal.fire({
      position: p ?? position,
      icon: "success",
      text,
      showConfirmButton: false,
      timer,
      toast: true,
    });
  };
  const toast_error = (text, p) => {
    return $swal.fire({
      position: p ?? position,
      icon: "error",
      text,
      showConfirmButton: false,
      timer,
      toast: true,
    });
  };
  const toast_warning = (text, p) => {
    return $swal.fire({
      position: p ?? position,
      icon: "warning",
      text,
      showConfirmButton: false,
      timer,
      toast: true,
    });
  };
  const toast_info = (text, p) => {
    return $swal.fire({
      position: p ?? position,
      icon: "info",
      text,
      showConfirmButton: false,
      timer,
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
