import { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  type: 'list' | 'next' | 'pause' | 'play' | 'prev';
}

export default function Icon({ type, ...props }: Props) {
  if (type === 'list')
    return (
      <svg fill="none" viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M8 10C8.82843 10 9.5 9.32843 9.5 8.5C9.5 7.67157 8.82843 7 8 7C7.17157 7 6.5 7.67157 6.5 8.5C6.5 9.32843 7.17157 10 8 10Z"
          fill="currentColor"
        />
        <path
          d="M13 10C13.8284 10 14.5 9.32843 14.5 8.5C14.5 7.67157 13.8284 7 13 7C12.1716 7 11.5 7.67157 11.5 8.5C11.5 9.32843 12.1716 10 13 10Z"
          fill="currentColor"
        />
        <path
          d="M3 10C3.82843 10 4.5 9.32843 4.5 8.5C4.5 7.67157 3.82843 7 3 7C2.17157 7 1.5 7.67157 1.5 8.5C1.5 9.32843 2.17157 10 3 10Z"
          fill="currentColor"
        />
      </svg>
    );

  if (type === 'play')
    return (
      <svg fill="none" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M14.5469 48.125C13.8753 48.1238 13.2157 47.9477 12.6328 47.6142C11.3203 46.8705 10.5044 45.4267 10.5044 43.8594V12.1406C10.5044 10.5689 11.3203 9.12954 12.6328 8.38579C13.2296 8.04283 13.9075 7.86646 14.5957 7.87512C15.2839 7.88378 15.9572 8.07715 16.5452 8.43501L43.6538 24.6619C44.2187 25.0161 44.6845 25.5081 45.0073 26.0916C45.3301 26.6751 45.4995 27.331 45.4995 27.9978C45.4995 28.6647 45.3301 29.3206 45.0073 29.9041C44.6845 30.4876 44.2187 30.9795 43.6538 31.3338L16.5408 47.565C15.9391 47.9288 15.25 48.1223 14.5469 48.125Z"
          fill="currentColor"
        />
      </svg>
    );

  if (type === 'next')
    return (
      <svg fill="none" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M37.6008 17.9273L22.8453 9.09921C22.4803 8.8771 22.0623 8.7571 21.635 8.75174C21.2078 8.74638 20.7869 8.85586 20.4164 9.06874C20.0144 9.30284 19.6815 9.63914 19.4515 10.0435C19.2216 10.4479 19.1027 10.9059 19.107 11.3711V17.5469L4.98828 9.09687C4.62324 8.87476 4.20526 8.75475 3.77799 8.74939C3.35073 8.74403 2.92987 8.85352 2.55937 9.0664C2.15737 9.30049 1.82449 9.6368 1.59451 10.0412C1.36454 10.4455 1.24568 10.9036 1.25 11.3687V28.6344C1.24554 29.0997 1.36434 29.5579 1.59432 29.9624C1.82429 30.3669 2.15726 30.7033 2.55937 30.9375C2.92987 31.1504 3.35073 31.2599 3.77799 31.2545C4.20526 31.2491 4.62324 31.1291 4.98828 30.907L19.107 22.4531V28.6312C19.102 29.0971 19.2206 29.5559 19.4506 29.961C19.6806 30.3661 20.0138 30.7031 20.4164 30.9375C20.7869 31.1504 21.2078 31.2599 21.635 31.2545C22.0623 31.2491 22.4803 31.1291 22.8453 30.907L37.6008 22.0789C37.9516 21.8592 38.2408 21.5539 38.4412 21.1918C38.6417 20.8296 38.7469 20.4225 38.7469 20.0086C38.7469 19.5947 38.6417 19.1875 38.4412 18.8254C38.2408 18.4633 37.9516 18.158 37.6008 17.9383V17.9273Z"
          fill="currentColor"
        />
      </svg>
    );

  if (type === 'prev')
    return (
      <svg fill="none" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M2.39922 22.0727L17.1547 30.9008C17.5197 31.1229 17.9377 31.2429 18.365 31.2483C18.7922 31.2536 19.2131 31.1441 19.5836 30.9313C19.9856 30.6972 20.3185 30.3609 20.5485 29.9565C20.7784 29.5521 20.8973 29.0941 20.893 28.6289L20.893 22.4531L35.0117 30.9031C35.3768 31.1252 35.7947 31.2452 36.222 31.2506C36.6493 31.256 37.0701 31.1465 37.4406 30.9336C37.8426 30.6995 38.1755 30.3632 38.4055 29.9588C38.6355 29.5545 38.7543 29.0964 38.75 28.6313L38.75 11.3656C38.7545 10.9003 38.6357 10.4421 38.4057 10.0376C38.1757 9.6331 37.8427 9.29667 37.4406 9.06251C37.0701 8.84962 36.6493 8.74014 36.222 8.7455C35.7947 8.75086 35.3768 8.87087 35.0117 9.09298L20.893 17.5469L20.893 11.3688C20.898 10.9029 20.7795 10.4441 20.5494 10.039C20.3194 9.63385 19.9862 9.29692 19.5836 9.06251C19.2131 8.84962 18.7922 8.74014 18.365 8.7455C17.9377 8.75086 17.5197 8.87086 17.1547 9.09297L2.39922 17.9211C2.04844 18.1408 1.75924 18.4461 1.55877 18.8082C1.3583 19.1704 1.25313 19.5775 1.25313 19.9914C1.25313 20.4053 1.3583 20.8125 1.55877 21.1746C1.75924 21.5367 2.04844 21.842 2.39922 22.0617L2.39922 22.0727Z"
          fill="currentColor"
        />
      </svg>
    );

  return null;
}