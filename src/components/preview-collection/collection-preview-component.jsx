import React from "react";
import CollectionItem from "../collection-item/collection-item-component";
import { CollectionPreviewContainer,TitlePreview,PreviewContainer } from "./collections-preview-style";

const CollectionPreview = ({title, items}) => (
    <CollectionPreviewContainer>
        <TitlePreview>{title.toUpperCase()} </TitlePreview>
        <PreviewContainer>
            {
                items.filter((item,idx) => idx < 4).map((item) => (
                    <CollectionItem  key = {item.id} item={item} />
                ))
            }
        </PreviewContainer>
    </CollectionPreviewContainer>
);

export default CollectionPreview;