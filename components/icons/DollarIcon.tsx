import { IconProps } from '@/types'
import React from 'react'

const Dollar = ({ width = "24px", height = "24px", color = "#000000" }: IconProps) => {
    return (
        <svg fill='none' height={height} width={width} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C10.1243 2 8.54878 2.0992 7.25007 2.38782C5.94002 2.67897 4.85116 3.176 4.01358 4.01358C3.176 4.85116 2.67897 5.94002 2.38782 7.25007C2.0992 8.54878 2 10.1243 2 12C2 13.8757 2.0992 15.4512 2.38782 16.7499C2.67897 18.06 3.176 19.1488 4.01358 19.9864C4.85116 20.824 5.94002 21.321 7.25007 21.6122C8.54878 21.9008 10.1243 22 12 22C13.8757 22 15.4512 21.9008 16.7499 21.6122C18.06 21.321 19.1488 20.824 19.9864 19.9864C20.824 19.1488 21.321 18.06 21.6122 16.7499C21.9008 15.4512 22 13.8757 22 12C22 10.1243 21.9008 8.54878 21.6122 7.25007C21.321 5.94002 20.824 4.85116 19.9864 4.01358C19.1488 3.176 18.06 2.67897 16.7499 2.38782C15.4512 2.0992 13.8757 2 12 2ZM12 6C12.5523 6 13 6.44772 13 7V7.0949C13.5949 7.21225 14.0715 7.42421 14.4357 7.64913C14.707 7.81664 14.9108 7.98796 15.0527 8.1254C15.1726 8.24151 15.2396 8.31864 15.3035 8.40472L15.3042 8.40562C15.6325 8.84977 15.5385 9.47592 15.0944 9.80419C14.6562 10.1281 14.0401 10.0402 13.7085 9.61119C13.6825 9.58115 13.4727 9.339 13 9.16492V11.1014C14.5954 11.4393 15.625 12.5859 15.625 14C15.625 15.4141 14.5954 16.5607 13 16.8986V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V16.8851C10.4745 16.7635 10.0315 16.5626 9.69138 16.3682C9.37099 16.1852 9.05517 15.969 8.79291 15.7071C8.40239 15.3166 8.4024 14.6834 8.79293 14.2929C9.18159 13.9042 9.81056 13.9024 10.2015 14.2873C10.219 14.3039 10.5435 14.595 11 14.789V12.8986C9.40463 12.5607 8.375 11.4141 8.375 10C8.375 8.58587 9.40463 7.43925 11 7.10139V7C11 6.44772 11.4477 6 12 6Z" fill={color} />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.1252 13.2457C13.0682 13.2126 13 13.2562 13 13.3222V14.6779C13 14.7439 13.0682 14.7875 13.1252 14.7543V14.7543C13.52 14.5248 13.6249 14.19 13.6249 14C13.6249 13.8101 13.52 13.4752 13.1252 13.2457V13.2457Z" fill="#323232" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11 9.33969C11 9.26548 10.9233 9.21647 10.8597 9.25462V9.25462C10.4773 9.48379 10.375 9.81251 10.375 10C10.375 10.1875 10.4773 10.5162 10.8597 10.7454V10.7454C10.9233 10.7835 11 10.7345 11 10.6603V9.33969Z" fill="#323232" />
        </svg>
    )
}

export default Dollar