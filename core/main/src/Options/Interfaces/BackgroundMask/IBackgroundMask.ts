import type { IColor } from "../../../Core/Interfaces/IColor";
import type { IBackgroundMaskCover } from "./IBackgroundMaskCover";

/**
 * The options to apply a base color to canvas to cover what's behind
 * The particles will unveil what is covered by the canvas
 * [[include:Options/BackgroundMask.md]]
 * @category Options
 */
export interface IBackgroundMask {
    /**
     * The color to use as a canvas background to cover
     */
    cover: IBackgroundMaskCover | IColor | string;

    /**
     * This settings enables the cover and the particles behavior as unveiling elements
     */
    enable: boolean;
}
