import { useCallback, useState } from "react";
import { Modal } from "../UI/Modal";
import { AddProductModal } from "../UI/Modal/AddProductModal";
import {
  StyledButton,
  StyledHero,
  StyledHeroTitle,
  StyledHeroWrapper,
} from "./styled";

export const Hero = () => {
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const handleOpenAddProductModal = () => setShowAddProductModal(true);
  const onHideAddProductModal = useCallback(
    () => setShowAddProductModal(false),
    []
  );

  return (
    <>
      <StyledHero>
        <StyledHeroTitle>Add Products</StyledHeroTitle>
        <StyledHeroWrapper>
          <StyledButton onClick={handleOpenAddProductModal}>Add</StyledButton>
        </StyledHeroWrapper>
      </StyledHero>
      <Modal show={showAddProductModal} onHide={onHideAddProductModal}>
        <AddProductModal
          onSuccess={onHideAddProductModal}
          onClose={onHideAddProductModal}
        />
      </Modal>
    </>
  );
};
