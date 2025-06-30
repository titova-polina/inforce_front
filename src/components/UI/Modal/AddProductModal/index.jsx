import { useState } from "react";
import {
  StyledButton,
  StyledCloseWrapper,
  StyledModalContent,
  StyledModalForm,
} from "./styled";
import { addProduct } from "../../../../API";
import { useDispatch } from "react-redux";
import { setProductData } from "../../../../redux/store";
import { ReactComponent as CloseIcon } from "../../../../static/icons/x-altx-alt.svg";
import { ErrorModal } from "../ErrorModal";

export const AddProductModal = ({ onSuccess, onClose }) => {
  const [{ name, imageUrl, count, width, height, weight }, setFormData] =
    useState({
      name: "",
      imageUrl: "",
      count: 0,
      width: 0,
      height: 0,
      weight: "",
    });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const onChangeName = (e) => {
    setFormData((prev) => {
      return { ...prev, name: e.target.value };
    });
  };

  const onChangeImage = (e) => {
    setFormData((prev) => {
      return { ...prev, imageUrl: e.target.value };
    });
  };

  const onChangeCount = (e) => {
    setFormData((prev) => {
      return { ...prev, count: e.target.value };
    });
  };

  const onChangeWidth = (e) => {
    setFormData((prev) => {
      return { ...prev, width: e.target.value };
    });
  };

  const onChangeHeight = (e) => {
    setFormData((prev) => {
      return { ...prev, height: e.target.value };
    });
  };

  const onChangeWeight = (e) => {
    setFormData((prev) => {
      return { ...prev, weight: e.target.value };
    });
  };

  const dispatch = useDispatch();

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const { data } = await addProduct({
        name,
        imageUrl,
        count,
        width,
        height,
        weight,
      });
      dispatch(
        setProductData({
          product: data.product,
        })
      );
      onSuccess();
    } catch (err) {
      console.log("err", err);
      setError(
        err.response?.data?.message || "Щось пішло не так. Спробуйте пізніше"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <StyledModalContent>
        <StyledCloseWrapper onClick={onClose}>
          <CloseIcon />
        </StyledCloseWrapper>
        <StyledModalForm>
          <label>
            Введіть назву продукту:
            <input
              onChange={onChangeName}
              value={name}
              type="name"
              placeholder="Назва продукту"
            />
          </label>
          <label>
            Введіть посилання на картинку:
            <input
              onChange={onChangeImage}
              value={imageUrl}
              type="text"
              placeholder="Посилання на картинку"
            />
          </label>
          <label>
            Введіть порядковий номер товару:
            <input
              onChange={onChangeCount}
              value={count}
              type="number"
              placeholder="Порятковий номер"
            />
          </label>
          <label>
            Введіть розмір продукту:
            <input
              onChange={onChangeWidth}
              value={width}
              type="number"
              placeholder="Ширина продукту"
            />
            <input
              onChange={onChangeHeight}
              value={height}
              type="number"
              placeholder="Висота продукту"
            />
          </label>
          <label>
            Введіть вагу продукту:
            <input
              onChange={onChangeWeight}
              value={weight}
              type="text"
              placeholder="Вага продукту"
            />
          </label>
        </StyledModalForm>
        <StyledButton onClick={handleSubmit} disabled={isLoading}>
          Add Product
        </StyledButton>
      </StyledModalContent>
      <ErrorModal message={error} setMessage={setError} />
    </>
  );
};
