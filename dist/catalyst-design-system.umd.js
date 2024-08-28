(function(e,a){typeof exports=="object"&&typeof module<"u"?a(exports):typeof define=="function"&&define.amd?define(["exports"],a):(e=typeof globalThis<"u"?globalThis:e||self,a(e["catalyst-design-system"]={}))})(this,function(e){"use strict";const r={light:{palette:{...{"Secondary-Brand":{100:"#f8fbf1",200:"#f1f7e3",300:"#eaf4d4",400:"#e3f0c6",500:"#dcecb7",600:"#d5e8a9",700:"#cee499",800:"#c7df8a",900:"#c1db79",1e3:"#bbd768",1200:"#99b449"},"Primary-Brand":{100:"#ecf1f1",200:"#ccd6d5",300:"#b3c2c0",400:"#9aaeac",500:"#829a99",600:"#6a8886",700:"#537573",800:"#3c6361",900:"#24514f",1e3:"#05403e"},black:{100:"#e6e6e6",200:"#cecece",300:"#b6b6b6",400:"#9f9f9f",500:"#888888",600:"#727272",700:"#5d5d5d",800:"#494949",900:"#353535",1e3:"#232323"},sage:{100:"#f6faf8",200:"#eef4f2",300:"#e6efeb",400:"#dde9e5",500:"#d5e4df",600:"#ccded8",700:"#c4d9d2",800:"#bcd4cc",900:"#b3cec5",1e3:"#abc9bf"},palm:{100:"#e8efee",200:"#d1dfde",300:"#bacfce",400:"#a3c0be",500:"#8db0ae",600:"#76a19e",700:"#60928f",800:"#488380",900:"#2f7471",1e3:"#086663"},red:{100:"#fceae7",200:"#f7d5d0",300:"#f2c0b9",400:"#ecaba2",500:"#e6968b",600:"#df8175",700:"#d66b5f",800:"#ce5448",900:"#c43a31",1e3:"#ba1414"},yellow:{100:"#fff8ed",200:"#fff0db",300:"#ffe8c9",400:"#ffe1b6",500:"#ffd9a3",600:"#ffd18f",700:"#ffc97a",800:"#ffc164",900:"#feb849",1e3:"#fdb022"},green:{100:"#e8f1eb",200:"#d2e3d8",300:"#bcd5c5",400:"#a6c7b2",500:"#90b99f",600:"#7aac8d",700:"#639e7b",800:"#4b9169",900:"#318358",1e3:"#067647"},blue:{100:"#e6efff",200:"#cddfff",300:"#b5cfff",400:"#9cbefd",500:"#84adfc",600:"#6b9afc",700:"#558bf6",800:"#3d78f3",900:"#2364ef",1e3:"#004eeb"},base:{white:"#ffffff",black:"#000000"}},...{text:{"text-primary":"var(--joy-palette-black-1000)","text-error-primary":"var(--joy-palette-red-1000)","text-warning-primary":"var(--joy-palette-yellow-1000)","text-success-primary":"var(--joy-palette-green-1000)","text-brand-primary":"var(--joy-palette-Primary-Brand-1000)","text-brand-secondary":"var(--joy-palette-Secondary-Brand-1000)","text-brand-tertiary":"var(--joy-palette-Sage-1000)","text-secondary":"var(--joy-palette-black-800)","text-secondary_hover":"var(--joy-palette-black-900)","text-tertiary":"var(--joy-palette-black-700)","text-tertiary_hover":"var(--joy-palette-black-800)","text-white":"var(--joy-palette-base-white)","text-disabled":"var(--joy-palette-black-500)","text-info-primary":"var(--joy-palette-blue-1000)","text-white-2":"var(--joy-palette-black-100)","text-brand-secondary-2":"var(--joy-palette-Secondary-Brand-1200)","text-info-primary-2":"var(--joy-palette-blue-800)"},border:{"border-primary-300":"var(--joy-palette-black-300)","border-secondary-200":"var(--joy-palette-black-200)","border-tertiary":"var(--joy-palette-black-100)","border-disabled":"var(--joy-palette-black-500)","border-brand":"var(--joy-palette-Primary-Brand-600)","border-brand-solid":"var(--joy-palette-Primary-Brand-1000)","border-error":"var(--joy-palette-red-600)","border-error-solid":"var(--joy-palette-red-1000)","border-success":"var(--joy-palette-green-600)","border-success-solid":"var(--joy-palette-green-1000)","border-warning":"var(--joy-palette-yellow-600)","border-warning-solid":"var(--joy-palette-yellow-1000)","border-info":"var(--joy-palette-blue-800)","border-info-solid":"var(--joy-palette-blue-1000)","border-brand-secondary":"var(--joy-palette-Secondary-Brand-600)","border-brand-secondary-solid":"var(--joy-palette-Secondary-Brand-1000)","border-primary-2-100":"var(--joy-palette-black-100)"},foreground:{"fg-white":"var(--joy-palette-base-White)","fg-disabled":"var(--joy-palette-black-200)","fg-brand-primary":"var(--joy-palette-Primary-Brand-1000)","fg-brand-secondary":"var(--joy-palette-Secondary-Brand-1000)","fg-error-primary":"var(--joy-palette-red-1000)","fg-error-secondary":"var(--joy-palette-red-800)","fg-warning-primary":"var(--joy-palette-yellow-1000)","fg-warning-secondary":"var(--joy-palette-yellow-800)","fg-success-primary":"var(--joy-palette-green-1000)","fg-success-secondary":"var(--joy-palette-green-800)","fg-black":"var(--joy-palette-base-black)","fg-info-primary":"var(--joy-palette-blue-1000)","fg-info-secondary":"var(--joy-palette-blue-800)","fg-primary":"var(--joy-palette-black-1000)","fg-secondary":"var(--joy-palette-black-800)","fg-tertiary":"var(--joy-palette-black-700)","fg-brand-tertiary":"var(--joy-palette-Sage-1000)"},background:{"bg-white":"var(--joy-palette-base-White)","bg-black":"var(--joy-palette-base-black)","bg-success-secondary":"var(--joy-palette-green-100)","bg-success-solid":"var(--joy-palette-green-1000)","bg-success-primary":"var(--joy-palette-green-200)","bg-warning-primary":"var(--joy-palette-yellow-100)","bg-warning-secondary":"var(--joy-palette-yellow-300)","bg-warning-solid":"var(--joy-palette-yellow-1000)","bg-error-primary":"var(--joy-palette-red-100)","bg-error-secondary":"var(--joy-palette-red-300)","bg-error-solid":"var(--joy-palette-red-1000)","bg-info-primary":"var(--joy-palette-blue-100)","bg-info-secondary":"var(--joy-palette-blue-300)","bg-info-solid":"var(--joy-palette-blue-1000)","bg-brand-solid":"var(--joy-palette-Primary-Brand-1000)","bg-brand-solid_hover":"var(--joy-palette-Primary-Brand-900)","bg-brand-solid-secondary":"var(--joy-palette-Secondary-Brand-1000)","bg-brand-solid-hover":"var(--joy-palette-Secondary-Brand-700)","bg-shadow-200":"var(--joy-palette-black-200)","bg-gray":"var(--joy-palette-black-100)","bg-gray-300":"var(--joy-palette-black-300)","bg-black-sec":"var(--joy-palette-black-1000)","bg-brand-solid_hover-2":"var(--joy-palette-Primary-Brand-200)","bg-brand-secondary":"var(--joy-palette-Primary-Brand-100)","bg-brand-solid-secondary-light":"var(--joy-palette-Secondary-Brand-100)","bg-brand-solid-secondary-2":"var(--joy-palette-secondary-brand-100)","bg-shadow-600":"var(--joy-palette-black-600)"}},...{button:{"button-primary-bg":"var(--joy-palette-background-bg-brand-solid)","button-primary-hover":"var(--joy-palette-background-bg-brand-solid-hover)","button-primary-border":"var(--joy-palette-border-border-brand)","button-primary-disabled":"var(--joy-palette-foreground-fg-disabled)","button-primary-text":"var(--joy-palette-text-text-white)","button-primary-text-2":"var(--joy-palette-text-text-disabled)","button-primary-disabled-text":"var(--joy-palette-text-text-disabled)","button-secondary-bg":"var(--joy-palette-background-bg-gray)","button-secondary-hover":"var(--joy-palette-background-bg-gray-300)","button-secondary-border":"var(--joy-palette-border-border-brand-secondary)","button-secondary-disabled":"var(--joy-palette-foreground-fg-disabled)","button-secondary-text":"var(--joy-palette-text-text-primary)","button-secondary-text-2":"var(--joy-palette-tex-text-secondary)","button-secondary-disabled-text":"var(--joy-palette-text-text-disabled)","button-outlined-hover":"var(--joy-palette-background-bg-shadow-200)","button-outlined-border":"var(--joy-palette-border-border-primary-300)","button-outlined-text":"var(--joy-palette-text-text-primary)","button-outlined-disabled-text":"var(--joy-palette-text-text-disabled)","button-outlined-disabled":"var(--joy-palette-foreground-fg-disabled)","button-text-hover":"var(--joy-palette-background-bg-shadow-200)","button-text-border":"var(--joy-palette-border-border-primary-300)","button-text-text":"var(--joy-palette-primary-text)","button-text-text-2":"var(--joy-palette-text-secondary)","button-text-disabled":"var(--joy-palette-foreground-fg-disabled)","button-text-disabled-text":"var(--joy-palette-text-text-disabled)"}}}}},t={...{none:"0rem",xxs:"0.125rem",xs:"0.25rem",sm:"0.375rem",md:"0.5rem",lg:"0.625rem",xl:"0.75rem","2xl":"0.875rem","3xl":"1rem","4xl":"1.125rem","5xl":"1.25rem","6xl":"1.375rem","7xl":"1.5rem","8xl":"1.625rem","9xl":"1.75rem","10xl":"1.875rem","11xl":"2rem","12xl":"6249.9375rem"},...{}},o={...{none:"0rem",xxs:"0.125rem",xs:"0.25rem",sm:"0.375rem",md:"0.5rem",lg:"0.625rem",xl:"0.75rem","2xl":"0.875rem","3xl":"1rem","4xl":"1.125rem","5xl":"1.25rem","6xl":"1.375rem","7xl":"1.5rem","8xl":"1.625rem","9xl":"1.75rem","10xl":"1.875rem","11xl":"2rem","12xl":"2.125rem","13xl":"2.25rem","14xl":"2.375rem","15xl":"2.5rem","16xl":"2.625rem","17xl":"2.75rem","18xl":"2.875rem","19xl":"3rem","20xl":"3.125rem","21xl":"3.25rem","22xl":"3.375rem","23xl":"3.5rem","24xl":"3.625rem","25xl":"3.75rem","26xl":"3.875rem","27xl":"4rem","28xl":"4.125rem","29xl":"4.25rem","30xl":"4.375rem","31xl":"4.5rem"}},i={inter:"'Inter', var(--joy-fontFamily-fallback)"},n={xxs:"0.75rem",xs:"0.875rem",sm:"1rem",md:"1.125rem",lg:"1.25rem",xl:"1.375rem","2xl":"1.5rem","3xl":"1.625rem","4xl":"1.75rem","5xl":"1.875rem","6xl":"2rem","7xl":"2.125rem","8xl":"2.25rem","9xl":"2.375rem","10xl":"2.5rem","11xl":"2.625rem","12xl":"2.75rem","13xl":"2.875rem","14xl":"3rem","15xl":"3.125rem","16xl":"3.25rem","17xl":"3.375rem","18xl":"3.5rem","19xl":"3.625rem","20xl":"3.75rem","21xl":"3.875rem","22xl":"4rem","23xl":"4.125rem","24xl":"4.25rem","25xl":"4.375rem","26xl":"4.5rem","Legend-size":"0.5rem"},l={Regular:"Regular",Medium:"Medium","Semi Bold":"Semi Bold",Bold:"Bold"},g={xxs:"0.75rem",xs:"0.875rem",sm:"1rem",md:"1.125rem",lg:"1.25rem",xl:"1.375rem","2xl":"1.5rem","3xl":"1.625rem","4xl":"1.75rem","5xl":"1.875rem","6xl":"2rem","7xl":"2.125rem","8xl":"2.25rem","9xl":"2.375rem","10xl":"2.5rem","11xl":"2.625rem","12xl":"2.75rem","13xl":"2.875rem","14xl":"3rem","15xl":"3.125rem","16xl":"3.25rem","17xl":"3.375rem","18xl":"3.5rem","19xl":"3.625rem","20xl":"3.75rem","21xl":"3.875rem","22xl":"4rem","23xl":"4.125rem","24xl":"4.25rem","25xl":"4.375rem","26xl":"4.5rem",none:"0rem"},y={...{xs:"36rem",sm:"49.125rem",md:"62rem",lg:"75rem",xl:"87.5rem"},...{"width-xs":"var(--joy-width-xs)","width-sm":"var(--joy-width-sm)","width-md":"var(--joy-width-md)","width-lg":"var(--joy-width-lg)","width-xl":"var(--joy-width-xl)"}},p={...{xs:"2.25rem",sm:"2.5rem",md:"2.75rem",lg:"3rem",xl:"3.75rem"}},m={"h1.regular":{fontFamily:"var(--joy-fontFamily-inter)",fontWeight:"var(--joy-fontWeight-regular)",fontSize:"var(--joy-fontSize-26xl)",lineHeight:"var(--joy-lineHeight-4xl)",paragraphSpacing:"var(--joy-paragraphSpacing-26xl)",letterSpacing:"var(--joy-letterSpacing-none)"},"h1.medium":{fontFamily:"var(--joy-fontFamily-inter)",fontWeight:"var(--joy-fontWeight-medium)",fontSize:"var(--joy-fontSize-26xl)",lineHeight:"var(--joy-lineHeight-4xl)",paragraphSpacing:"var(--joy-paragraphSpacing-26xl)",letterSpacing:"var(--joy-letterSpacing-none)"},"h1.semibold":{fontFamily:"var(--joy-fontFamily-inter)",fontWeight:"var(--joy-fontWeight-semiBold)",fontSize:"var(--joy-fontSize-26xl)",lineHeight:"var(--joy-lineHeight-4xl)",paragraphSpacing:"var(--joy-paragraphSpacing-26xl)",letterSpacing:"var(--joy-letterSpacing-none)"},"h1.bold":{fontFamily:"var(--joy-fontFamily-inter)",fontWeight:"var(--joy-fontWeight-bold)",fontSize:"var(--joy-fontSize-26xl)",lineHeight:"var(--joy-lineHeight-4xl)",letterSpacing:"var(--joy-letterSpacing-none)"},"h2.regular":{fontFamily:"var(--joy-fontFamily-inter)",fontWeight:"var(--joy-fontWeight-regular)",fontSize:"var(--joy-fontSize-20xl)",lineHeight:"var(--joy-lineHeight-4xl)",paragraphSpacing:"var(--joy-paragraphSpacing-23xl)",letterSpacing:"var(--joy-letterSpacing-none)"},"h2.medium":{fontFamily:"var(--joy-fontFamily-inter)",fontWeight:"var(--joy-fontWeight-medium)",fontSize:"var(--joy-fontSize-20xl)",lineHeight:"var(--joy-lineHeight-4xl)",paragraphSpacing:"var(--joy-paragraphSpacing-23xl)",letterSpacing:"var(--joy-letterSpacing-none)"},"h2.semibold":{fontFamily:"var(--joy-fontFamily-inter)",fontWeight:"var(--joy-fontWeight-semiBold)",fontSize:"var(--joy-fontSize-20xl)",lineHeight:"var(--joy-lineHeight-4xl)",paragraphSpacing:"var(--joy-paragraphSpacing-23xl)",letterSpacing:"var(--joy-letterSpacing-none)"},"h2.bold":{fontFamily:"var(--joy-fontFamily-inter)",fontWeight:"var(--joy-fontWeight-bold)",fontSize:"var(--joy-fontSize-20xl)",lineHeight:"var(--joy-lineHeight-4xl)",paragraphSpacing:"var(--joy-paragraphSpacing-23xl)",letterSpacing:"var(--joy-letterSpacing-none)"},"h3.regular":{fontFamily:"var(--joy-fontFamily-inter)",fontWeight:"var(--joy-fontWeight-regular)",fontSize:"var(--joy-fontSize-14xl)",lineHeight:"var(--joy-lineHeight-3xl)",paragraphSpacing:"var(--joy-paragraphSpacing-14xl)",letterSpacing:"var(--joy-letterSpacing-none)"},"h3.medium":{fontFamily:"var(--joy-fontFamily-inter)",fontWeight:"var(--joy-fontWeight-medium)",fontSize:"var(--joy-fontSize-14xl)",lineHeight:"var(--joy-lineHeight-3xl)",paragraphSpacing:"var(--joy-paragraphSpacing-14xl)",letterSpacing:"var(--joy-letterSpacing-none)"},"h3.semibold":{fontFamily:"var(--joy-fontFamily-inter)",fontWeight:"var(--joy-fontWeight-semiBold)",fontSize:"var(--joy-fontSize-14xl)",lineHeight:"var(--joy-lineHeight-3xl)",paragraphSpacing:"var(--joy-paragraphSpacing-14xl)",letterSpacing:"var(--joy-letterSpacing-none)"},"h3.bold":{fontFamily:"var(--joy-fontFamily-inter)",fontWeight:"var(--joy-fontWeight-bold)",fontSize:"var(--joy-fontSize-14xl)",lineHeight:"var(--joy-lineHeight-3xl)",paragraphSpacing:"var(--joy-paragraphSpacing-14xl)",letterSpacing:"var(--joy-letterSpacing-none)"},"h4.regular":{fontFamily:"var(--joy-fontFamily-inter)",fontWeight:"var(--joy-fontWeight-regular)",fontSize:"var(--joy-fontSize-8xl)",lineHeight:"var(--joy-lineHeight-2xl)",paragraphSpacing:"var(--joy-paragraphSpacing-8xl)",letterSpacing:"var(--joy-letterSpacing-none)"},"h4.medium":{fontFamily:"var(--joy-fontFamily-inter)",fontWeight:"var(--joy-fontWeight-medium)",fontSize:"var(--joy-fontSize-8xl)",lineHeight:"var(--joy-lineHeight-2xl)",paragraphSpacing:"var(--joy-paragraphSpacing-8xl)",letterSpacing:"var(--joy-letterSpacing-none)"},"h4.semibold":{fontFamily:"var(--joy-fontFamily-inter)",fontWeight:"var(--joy-fontWeight-semiBold)",fontSize:"var(--joy-fontSize-8xl)",lineHeight:"var(--joy-lineHeight-2xl)",paragraphSpacing:"var(--joy-paragraphSpacing-8xl)",letterSpacing:"var(--joy-letterSpacing-none)"},"h4.bold":{fontFamily:"var(--joy-fontFamily-inter)",fontWeight:"var(--joy-fontWeight-bold)",fontSize:"var(--joy-fontSize-8xl)",lineHeight:"var(--joy-lineHeight-2xl)",paragraphSpacing:"var(--joy-paragraphSpacing-8xl)",letterSpacing:"var(--joy-letterSpacing-none)"},"h5.regular":{fontFamily:"var(--joy-fontFamily-inter)",fontWeight:"var(--joy-fontWeight-regular)",fontSize:"var(--joy-fontSize-5xl)",lineHeight:"var(--joy-lineHeight-md)",paragraphSpacing:"var(--joy-paragraphSpacing-4xl)",letterSpacing:"var(--joy-letterSpacing-none)"},"h5.medium":{fontFamily:"var(--joy-fontFamily-inter)",fontWeight:"var(--joy-fontWeight-medium)",fontSize:"var(--joy-fontSize-5xl)",lineHeight:"var(--joy-lineHeight-md)",paragraphSpacing:"var(--joy-paragraphSpacing-4xl)",letterSpacing:"var(--joy-letterSpacing-none)"},"h5.semibold":{fontFamily:"var(--joy-fontFamily-inter)",fontWeight:"var(--joy-fontWeight-semiBold)",fontSize:"var(--joy-fontSize-5xl)",lineHeight:"var(--joy-lineHeight-md)",paragraphSpacing:"var(--joy-paragraphSpacing-4xl)",letterSpacing:"var(--joy-letterSpacing-none)"},"h5.bold":{fontFamily:"var(--joy-fontFamily-inter)",fontWeight:"var(--joy-fontWeight-bold)",fontSize:"var(--joy-fontSize-5xl)",lineHeight:"var(--joy-lineHeight-md)",paragraphSpacing:"var(--joy-paragraphSpacing-4xl)",letterSpacing:"var(--joy-letterSpacing-none)"},"h6.regular":{fontFamily:"var(--joy-fontFamily-inter)",fontWeight:"var(--joy-fontWeight-regular)",fontSize:"var(--joy-fontSize-2xl)",lineHeight:"var(--joy-lineHeight-sm)",paragraphSpacing:"var(--joy-paragraphSpacing-lg)",letterSpacing:"var(--joy-letterSpacing-none)"},"h6.medium":{fontFamily:"var(--joy-fontFamily-inter)",fontWeight:"var(--joy-fontWeight-medium)",fontSize:"var(--joy-fontSize-2xl)",lineHeight:"var(--joy-lineHeight-sm)",paragraphSpacing:"var(--joy-paragraphSpacing-lg)",letterSpacing:"var(--joy-letterSpacing-none)"},"h6.semibold":{fontFamily:"var(--joy-fontFamily-inter)",fontWeight:"var(--joy-fontWeight-semiBold)",fontSize:"var(--joy-fontSize-2xl)",lineHeight:"var(--joy-lineHeight-sm)",paragraphSpacing:"var(--joy-paragraphSpacing-lg)",letterSpacing:"var(--joy-letterSpacing-none)"},"h6.bold":{fontFamily:"var(--joy-fontFamily-inter)",fontWeight:"var(--joy-fontWeight-bold)",fontSize:"var(--joy-fontSize-2xl)",lineHeight:"var(--joy-lineHeight-sm)",paragraphSpacing:"var(--joy-paragraphSpacing-lg)",letterSpacing:"var(--joy-letterSpacing-none)"},"xl.regular":{fontFamily:"var(--joy-fontFamily-inter)",fontWeight:"var(--joy-fontWeight-regular)",fontSize:"var(--joy-fontSize-26xl)",lineHeight:"var(--joy-lineHeight-4xl)",paragraphSpacing:"var(--joy-paragraphSpacing-26xl)",letterSpacing:"var(--joy-letterSpacing-none)"},"xl.medium":{fontFamily:"var(--joy-fontFamily-inter)",fontWeight:"var(--joy-fontWeight-medium)",fontSize:"var(--joy-fontSize-26xl)",lineHeight:"var(--joy-lineHeight-4xl)",paragraphSpacing:"var(--joy-paragraphSpacing-26xl)",letterSpacing:"var(--joy-letterSpacing-none)"},"xl.semibold":{fontFamily:"var(--joy-fontFamily-inter)",fontWeight:"var(--joy-fontWeight-semiBold)",fontSize:"var(--joy-fontSize-26xl)",lineHeight:"var(--joy-lineHeight-4xl)",paragraphSpacing:"var(--joy-paragraphSpacing-26xl)",letterSpacing:"var(--joy-letterSpacing-none)"},"xl.bold":{fontFamily:"var(--joy-fontFamily-inter)",fontWeight:"var(--joy-fontWeight-bold)",fontSize:"var(--joy-fontSize-26xl)",lineHeight:"var(--joy-lineHeight-4xl)",paragraphSpacing:"var(--joy-paragraphSpacing-26xl)",letterSpacing:"var(--joy-letterSpacing-none)"},"lg.regular":{fontFamily:"var(--joy-fontFamily-inter)",fontWeight:"var(--joy-fontWeight-regular)",fontSize:"var(--joy-fontSize-lg)",lineHeight:"var(--joy-lineHeight-sm)",paragraphSpacing:"var(--joy-paragraphSpacing-md)",letterSpacing:"var(--joy-letterSpacing-none)"},"lg.medium":{fontFamily:"var(--joy-fontFamily-inter)",fontWeight:"var(--joy-fontWeight-medium)",fontSize:"var(--joy-fontSize-lg)",lineHeight:"var(--joy-lineHeight-sm)",paragraphSpacing:"var(--joy-paragraphSpacing-md)",letterSpacing:"var(--joy-letterSpacing-none)"},"lg.semibold":{fontFamily:"var(--joy-fontFamily-inter)",fontWeight:"var(--joy-fontWeight-semiBold)",fontSize:"var(--joy-fontSize-lg)",lineHeight:"var(--joy-lineHeight-sm)",paragraphSpacing:"var(--joy-paragraphSpacing-md)",letterSpacing:"var(--joy-letterSpacing-none)"},"lg.bold":{fontFamily:"var(--joy-fontFamily-inter)",fontWeight:"var(--joy-fontWeight-bold)",fontSize:"var(--joy-fontSize-lg)",lineHeight:"var(--joy-lineHeight-sm)",paragraphSpacing:"var(--joy-paragraphSpacing-md)",letterSpacing:"var(--joy-letterSpacing-none)"},"md.regular":{fontFamily:"var(--joy-fontFamily-inter)",fontWeight:"var(--joy-fontWeight-regular)",fontSize:"var(--joy-fontSize-sm)",lineHeight:"var(--joy-lineHeight-sm)",paragraphSpacing:"var(--joy-paragraphSpacing-xs)",letterSpacing:"var(--joy-letterSpacing-none)"},"md.medium":{fontFamily:"var(--joy-fontFamily-inter)",fontWeight:"var(--joy-fontWeight-medium)",fontSize:"var(--joy-fontSize-sm)",lineHeight:"var(--joy-lineHeight-sm)",paragraphSpacing:"var(--joy-paragraphSpacing-xs)",letterSpacing:"var(--joy-letterSpacing-none)"},"md.semibold":{fontFamily:"var(--joy-fontFamily-inter)",fontWeight:"var(--joy-fontWeight-semiBold)",fontSize:"var(--joy-fontSize-sm)",lineHeight:"var(--joy-lineHeight-sm)",paragraphSpacing:"var(--joy-paragraphSpacing-xs)",letterSpacing:"var(--joy-letterSpacing-none)"},"md.bold":{fontFamily:"var(--joy-fontFamily-inter)",fontWeight:"var(--joy-fontWeight-bold)",fontSize:"var(--joy-fontSize-sm)",lineHeight:"var(--joy-lineHeight-sm)",paragraphSpacing:"var(--joy-paragraphSpacing-xs)",letterSpacing:"var(--joy-letterSpacing-none)"},"sm.regular":{fontFamily:"var(--joy-fontFamily-inter)",fontWeight:"var(--joy-fontWeight-regular)",fontSize:"var(--joy-fontSize-xs)",lineHeight:"var(--joy-lineHeight-xs)",paragraphSpacing:"var(--joy-paragraphSpacing-xxs)",letterSpacing:"var(--joy-letterSpacing-none)"},"sm.medium":{fontFamily:"var(--joy-fontFamily-inter)",fontWeight:"var(--joy-fontWeight-medium)",fontSize:"var(--joy-fontSize-xs)",lineHeight:"var(--joy-lineHeight-xs)",paragraphSpacing:"var(--joy-paragraphSpacing-xxs)",letterSpacing:"var(--joy-letterSpacing-none)"},"sm.semibold":{fontFamily:"var(--joy-fontFamily-inter)",fontWeight:"var(--joy-fontWeight-semiBold)",fontSize:"var(--joy-fontSize-xs)",lineHeight:"var(--joy-lineHeight-xs)",paragraphSpacing:"var(--joy-paragraphSpacing-xxs)",letterSpacing:"var(--joy-letterSpacing-none)"},"sm.bold":{fontFamily:"var(--joy-fontFamily-inter)",fontWeight:"var(--joy-fontWeight-bold)",fontSize:"var(--joy-fontSize-xs)",lineHeight:"var(--joy-lineHeight-xs)",paragraphSpacing:"var(--joy-paragraphSpacing-xxs)",letterSpacing:"var(--joy-letterSpacing-none)"},"xs.regular":{fontFamily:"var(--joy-fontFamily-inter)",fontWeight:"var(--joy-fontWeight-regular)",fontSize:"var(--joy-fontSize-xxs)",lineHeight:"var(--joy-lineHeight-xs)",paragraphSpacing:"var(--joy-paragraphSpacing-xxs)",letterSpacing:"var(--joy-letterSpacing-none)"},"xs.medium":{fontFamily:"var(--joy-fontFamily-inter)",fontWeight:"var(--joy-fontWeight-medium)",fontSize:"var(--joy-fontSize-xxs)",lineHeight:"var(--joy-lineHeight-xs)",paragraphSpacing:"var(--joy-paragraphSpacing-xxs)",letterSpacing:"var(--joy-letterSpacing-none)"},"xs.semibold":{fontFamily:"var(--joy-fontFamily-inter)",fontWeight:"var(--joy-fontWeight-semiBold)",fontSize:"var(--joy-fontSize-xxs)",lineHeight:"var(--joy-lineHeight-xs)",paragraphSpacing:"var(--joy-paragraphSpacing-xxs)",letterSpacing:"var(--joy-letterSpacing-none)"},"xs.bold":{fontFamily:"var(--joy-fontFamily-inter)",fontWeight:"var(--joy-fontWeight-bold)",fontSize:"var(--joy-fontSize-xxs)",lineHeight:"var(--joy-lineHeight-xs)",paragraphSpacing:"var(--joy-paragraphSpacing-xxs)",letterSpacing:"var(--joy-letterSpacing-none)"},"legend.regular":{fontFamily:"var(--joy-fontFamily-inter)",fontWeight:"var(--joy-fontWeight-regular)",fontSize:"var(--joy-fontSize-xxs)",lineHeight:"var(--joy-lineHeight-xs)",paragraphSpacing:"var(--joy-paragraphSpacing-xxs)",letterSpacing:"var(--joy-letterSpacing-none)"},"legend.medium":{fontFamily:"var(--joy-fontFamily-inter)",fontWeight:"var(--joy-fontWeight-medium)",fontSize:"var(--joy-fontSize-xxs)",lineHeight:"var(--joy-lineHeight-xs)",paragraphSpacing:"var(--joy-paragraphSpacing-xxs)",letterSpacing:"var(--joy-letterSpacing-none)"},"legend.semibold":{fontFamily:"var(--joy-fontFamily-inter)",fontWeight:"var(--joy-fontWeight-semiBold)",fontSize:"var(--joy-fontSize-xxs)",lineHeight:"var(--joy-lineHeight-xs)",paragraphSpacing:"var(--joy-paragraphSpacing-xxs)",letterSpacing:"var(--joy-letterSpacing-none)"},"legend.bold":{fontFamily:"var(--joy-fontFamily-inter)",fontWeight:"var(--joy-fontWeight-bold)",fontSize:"var(--joy-fontSize-xxs)",lineHeight:"var(--joy-lineHeight-xs)",paragraphSpacing:"var(--joy-paragraphSpacing-xxs)",letterSpacing:"var(--joy-letterSpacing-none)"}},f={xxs:"0.75rem",xs:"1rem",sm:"1.125rem",md:"1.25rem",lg:"1.375rem",xl:"1.5rem","2xl":"1.625rem","3xl":"1.75rem","4xl":"1.875rem","5xl":"2rem","6xl":"2.125rem","7xl":"2.25rem","8xl":"2.375rem","9xl":"2.5rem","10xl":"2.625rem","11xl":"2.75rem","12xl":"2.875rem","13xl":"3rem","14xl":"3.125rem","15xl":"3.25rem","16xl":"3.375rem","17xl":"3.5rem","18xl":"3.625rem","19xl":"3.75rem","20xl":"3.875rem","21xl":"4rem","22xl":"4.125rem","23xl":"4.25rem","24xl":"4.375rem","25xl":"4.5rem","26xl":"4.5rem"},v={none:"0rem",xs:"0.125rem",sm:"0.25rem",md:"0.5rem",lg:"2rem",negative:"-0.125rem"},j=()=>"Hello World!";e.colors=r,e.fontFamily=i,e.fontSize=n,e.fontWeight=l,e.height=p,e.letterSpacing=v,e.lineHeight=f,e.paragraphSpacing=g,e.radius=t,e.spacing=o,e.testPackage=j,e.typography=m,e.width=y,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});
