import { SVGAttributes } from "react";

const CheckSvg = (props: SVGAttributes<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} {...props}>
    <path d="M42.875 8.625a.88.88 0 0 0-.094.031 1.011 1.011 0 0 0-.625.469L21.72 40.813 7.656 28.124a.997.997 0 0 0-1.773.473.998.998 0 0 0 .46.996l14.907 13.5a.999.999 0 0 0 1.5-.219l21.094-32.688a1 1 0 0 0-.969-1.562Z" />
  </svg>
);
export default CheckSvg;
