interface ICustomer {
    id: number;
    name: string;
    email: string;
    company: string;
    payment: {
        icon: string;
        ccnumber: string;
        label: string;
    };
    date: string;
}

const customers: Array<ICustomer> = [
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Emma Smith",
        email: "e.smith@kpmg.com.au",
        company: "-",
        payment: {
            icon: "/media/svg/card-logos/mastercard.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "mastercard",
        },
        date: "14 Dec 2020, 8:43 pm",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Melody Macy",
        email: "melody@altbox.com",
        company: "Google",
        payment: {
            icon: "/media/svg/card-logos/visa.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "visa",
        },
        date: "01 Dec 2020, 10:12 am",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Max Smith",
        email: "max@kt.com",
        company: "Bistro Union",
        payment: {
            icon: "/media/svg/card-logos/mastercard.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "mastercard",
        },
        date: "12 Nov 2020, 2:01 pm",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Sean Bean",
        email: "sean@dellito.com",
        company: "Astro Limited",
        payment: {
            icon: "/media/svg/card-logos/american-express.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "american_express",
        },
        date: "21 Oct 2020, 5:54 pm",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Brian Cox",
        email: "brian@exchange.com",
        company: "-",
        payment: {
            icon: "/media/svg/card-logos/visa.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "visa",
        },
        date: "19 Oct 2020, 7:32 am",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Mikaela Collins",
        email: "mikaela@pexcom.com",
        company: "Keenthemes",
        payment: {
            icon: "/media/svg/card-logos/american-express.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "american_express",
        },
        date: "23 Sep 2020, 12:37 am",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Francis Mitcham",
        email: "f.mitcham@kpmg.com.au",
        company: "Paypal",
        payment: {
            icon: "/media/svg/card-logos/mastercard.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "mastercard",
        },
        date: "11 Sep 2020, 3:15 pm",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Olivia Wild",
        email: "olivia@corpmail.com",
        company: "-",
        payment: {
            icon: "/media/svg/card-logos/american-express.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "american_express",
        },
        date: "03 Sep 2020, 1:08 am",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Neil Owen",
        email: "owen.neil@gmail.com",
        company: "Paramount",
        payment: {
            icon: "/media/svg/card-logos/visa.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "visa",
        },
        date: "01 Sep 2020, 4:58 pm",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Dan Wilson",
        email: "dam@consilting.com",
        company: "Trinity Studio",
        payment: {
            icon: "/media/svg/card-logos/visa.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "visa",
        },
        date: "18 Aug 2020, 3:34 pm",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Emma Bold",
        email: "emma@intenso.com",
        company: "B&T Legal Services",
        payment: {
            icon: "/media/svg/card-logos/mastercard.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "mastercard",
        },
        date: "14 Aug 2020, 1:21 pm",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Ana Crown",
        email: "ana.cf@limtel.com",
        company: "Paysafe Security",
        payment: {
            icon: "/media/svg/card-logos/american-express.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "american_express",
        },
        date: "11 Aug 2020, 5:13 pm",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Emma Smith",
        email: "e.smith@kpmg.com.au",
        company: "-",
        payment: {
            icon: "/media/svg/card-logos/mastercard.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "mastercard",
        },
        date: "14 Dec 2020, 8:43 pm",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Melody Macy",
        email: "melody@altbox.com",
        company: "Google",
        payment: {
            icon: "/media/svg/card-logos/visa.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "visa",
        },
        date: "01 Dec 2020, 10:12 am",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Max Smith",
        email: "max@kt.com",
        company: "Bistro Union",
        payment: {
            icon: "/media/svg/card-logos/mastercard.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "mastercard",
        },
        date: "12 Nov 2020, 2:01 pm",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Sean Bean",
        email: "sean@dellito.com",
        company: "Astro Limited",
        payment: {
            icon: "/media/svg/card-logos/american-express.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "american_express",
        },
        date: "21 Oct 2020, 5:54 pm",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Brian Cox",
        email: "brian@exchange.com",
        company: "-",
        payment: {
            icon: "/media/svg/card-logos/visa.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "visa",
        },
        date: "19 Oct 2020, 7:32 am",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Mikaela Collins",
        email: "mikaela@pexcom.com",
        company: "Keenthemes",
        payment: {
            icon: "/media/svg/card-logos/american-express.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "american_express",
        },
        date: "23 Sep 2020, 12:37 am",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Francis Mitcham",
        email: "f.mitcham@kpmg.com.au",
        company: "Paypal",
        payment: {
            icon: "/media/svg/card-logos/mastercard.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "mastercard",
        },
        date: "11 Sep 2020, 3:15 pm",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Olivia Wild",
        email: "olivia@corpmail.com",
        company: "-",
        payment: {
            icon: "/media/svg/card-logos/american-express.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "american_express",
        },
        date: "03 Sep 2020, 1:08 am",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Neil Owen",
        email: "owen.neil@gmail.com",
        company: "Paramount",
        payment: {
            icon: "/media/svg/card-logos/visa.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "visa",
        },
        date: "01 Sep 2020, 4:58 pm",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Dan Wilson",
        email: "dam@consilting.com",
        company: "Trinity Studio",
        payment: {
            icon: "/media/svg/card-logos/visa.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "visa",
        },
        date: "18 Aug 2020, 3:34 pm",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Emma Bold",
        email: "emma@intenso.com",
        company: "B&T Legal Services",
        payment: {
            icon: "/media/svg/card-logos/mastercard.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "mastercard",
        },
        date: "14 Aug 2020, 1:21 pm",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Ana Crown",
        email: "ana.cf@limtel.com",
        company: "Paysafe Security",
        payment: {
            icon: "/media/svg/card-logos/american-express.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "american_express",
        },
        date: "11 Aug 2020, 5:13 pm",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Emma Smith",
        email: "e.smith@kpmg.com.au",
        company: "-",
        payment: {
            icon: "/media/svg/card-logos/mastercard.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "mastercard",
        },
        date: "14 Dec 2020, 8:43 pm",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Melody Macy",
        email: "melody@altbox.com",
        company: "Google",
        payment: {
            icon: "/media/svg/card-logos/visa.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "visa",
        },
        date: "01 Dec 2020, 10:12 am",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Max Smith",
        email: "max@kt.com",
        company: "Bistro Union",
        payment: {
            icon: "/media/svg/card-logos/mastercard.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "mastercard",
        },
        date: "12 Nov 2020, 2:01 pm",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Sean Bean",
        email: "sean@dellito.com",
        company: "Astro Limited",
        payment: {
            icon: "/media/svg/card-logos/american-express.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "american_express",
        },
        date: "21 Oct 2020, 5:54 pm",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Brian Cox",
        email: "brian@exchange.com",
        company: "-",
        payment: {
            icon: "/media/svg/card-logos/visa.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "visa",
        },
        date: "19 Oct 2020, 7:32 am",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Mikaela Collins",
        email: "mikaela@pexcom.com",
        company: "Keenthemes",
        payment: {
            icon: "/media/svg/card-logos/american-express.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "american_express",
        },
        date: "23 Sep 2020, 12:37 am",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Francis Mitcham",
        email: "f.mitcham@kpmg.com.au",
        company: "Paypal",
        payment: {
            icon: "/media/svg/card-logos/mastercard.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "mastercard",
        },
        date: "11 Sep 2020, 3:15 pm",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Olivia Wild",
        email: "olivia@corpmail.com",
        company: "-",
        payment: {
            icon: "/media/svg/card-logos/american-express.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "american_express",
        },
        date: "03 Sep 2020, 1:08 am",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Neil Owen",
        email: "owen.neil@gmail.com",
        company: "Paramount",
        payment: {
            icon: "/media/svg/card-logos/visa.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "visa",
        },
        date: "01 Sep 2020, 4:58 pm",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Dan Wilson",
        email: "dam@consilting.com",
        company: "Trinity Studio",
        payment: {
            icon: "/media/svg/card-logos/visa.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "visa",
        },
        date: "18 Aug 2020, 3:34 pm",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Emma Bold",
        email: "emma@intenso.com",
        company: "B&T Legal Services",
        payment: {
            icon: "/media/svg/card-logos/mastercard.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "mastercard",
        },
        date: "14 Aug 2020, 1:21 pm",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Ana Crown",
        email: "ana.cf@limtel.com",
        company: "Paysafe Security",
        payment: {
            icon: "/media/svg/card-logos/american-express.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "american_express",
        },
        date: "11 Aug 2020, 5:13 pm",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Emma Smith",
        email: "e.smith@kpmg.com.au",
        company: "-",
        payment: {
            icon: "/media/svg/card-logos/mastercard.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "mastercard",
        },
        date: "14 Dec 2020, 8:43 pm",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Melody Macy",
        email: "melody@altbox.com",
        company: "Google",
        payment: {
            icon: "/media/svg/card-logos/visa.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "visa",
        },
        date: "01 Dec 2020, 10:12 am",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Max Smith",
        email: "max@kt.com",
        company: "Bistro Union",
        payment: {
            icon: "/media/svg/card-logos/mastercard.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "mastercard",
        },
        date: "12 Nov 2020, 2:01 pm",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Sean Bean",
        email: "sean@dellito.com",
        company: "Astro Limited",
        payment: {
            icon: "/media/svg/card-logos/american-express.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "american_express",
        },
        date: "21 Oct 2020, 5:54 pm",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Brian Cox",
        email: "brian@exchange.com",
        company: "-",
        payment: {
            icon: "/media/svg/card-logos/visa.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "visa",
        },
        date: "19 Oct 2020, 7:32 am",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Mikaela Collins",
        email: "mikaela@pexcom.com",
        company: "Keenthemes",
        payment: {
            icon: "/media/svg/card-logos/american-express.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "american_express",
        },
        date: "23 Sep 2020, 12:37 am",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Francis Mitcham",
        email: "f.mitcham@kpmg.com.au",
        company: "Paypal",
        payment: {
            icon: "/media/svg/card-logos/mastercard.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "mastercard",
        },
        date: "11 Sep 2020, 3:15 pm",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Olivia Wild",
        email: "olivia@corpmail.com",
        company: "-",
        payment: {
            icon: "/media/svg/card-logos/american-express.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "american_express",
        },
        date: "03 Sep 2020, 1:08 am",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Neil Owen",
        email: "owen.neil@gmail.com",
        company: "Paramount",
        payment: {
            icon: "/media/svg/card-logos/visa.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "visa",
        },
        date: "01 Sep 2020, 4:58 pm",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Dan Wilson",
        email: "dam@consilting.com",
        company: "Trinity Studio",
        payment: {
            icon: "/media/svg/card-logos/visa.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "visa",
        },
        date: "18 Aug 2020, 3:34 pm",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Emma Bold",
        email: "emma@intenso.com",
        company: "B&T Legal Services",
        payment: {
            icon: "/media/svg/card-logos/mastercard.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "mastercard",
        },
        date: "14 Aug 2020, 1:21 pm",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Ana Crown",
        email: "ana.cf@limtel.com",
        company: "Paysafe Security",
        payment: {
            icon: "/media/svg/card-logos/american-express.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "american_express",
        },
        date: "11 Aug 2020, 5:13 pm",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Emma Smith",
        email: "e.smith@kpmg.com.au",
        company: "-",
        payment: {
            icon: "/media/svg/card-logos/mastercard.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "mastercard",
        },
        date: "14 Dec 2020, 8:43 pm",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Melody Macy",
        email: "melody@altbox.com",
        company: "Google",
        payment: {
            icon: "/media/svg/card-logos/visa.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "visa",
        },
        date: "01 Dec 2020, 10:12 am",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Max Smith",
        email: "max@kt.com",
        company: "Bistro Union",
        payment: {
            icon: "/media/svg/card-logos/mastercard.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "mastercard",
        },
        date: "12 Nov 2020, 2:01 pm",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Sean Bean",
        email: "sean@dellito.com",
        company: "Astro Limited",
        payment: {
            icon: "/media/svg/card-logos/american-express.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "american_express",
        },
        date: "21 Oct 2020, 5:54 pm",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Brian Cox",
        email: "brian@exchange.com",
        company: "-",
        payment: {
            icon: "/media/svg/card-logos/visa.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "visa",
        },
        date: "19 Oct 2020, 7:32 am",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Mikaela Collins",
        email: "mikaela@pexcom.com",
        company: "Keenthemes",
        payment: {
            icon: "/media/svg/card-logos/american-express.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "american_express",
        },
        date: "23 Sep 2020, 12:37 am",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Francis Mitcham",
        email: "f.mitcham@kpmg.com.au",
        company: "Paypal",
        payment: {
            icon: "/media/svg/card-logos/mastercard.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "mastercard",
        },
        date: "11 Sep 2020, 3:15 pm",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Olivia Wild",
        email: "olivia@corpmail.com",
        company: "-",
        payment: {
            icon: "/media/svg/card-logos/american-express.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "american_express",
        },
        date: "03 Sep 2020, 1:08 am",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Neil Owen",
        email: "owen.neil@gmail.com",
        company: "Paramount",
        payment: {
            icon: "/media/svg/card-logos/visa.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "visa",
        },
        date: "01 Sep 2020, 4:58 pm",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Dan Wilson",
        email: "dam@consilting.com",
        company: "Trinity Studio",
        payment: {
            icon: "/media/svg/card-logos/visa.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "visa",
        },
        date: "18 Aug 2020, 3:34 pm",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Emma Bold",
        email: "emma@intenso.com",
        company: "B&T Legal Services",
        payment: {
            icon: "/media/svg/card-logos/mastercard.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "mastercard",
        },
        date: "14 Aug 2020, 1:21 pm",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Ana Crown",
        email: "ana.cf@limtel.com",
        company: "Paysafe Security",
        payment: {
            icon: "/media/svg/card-logos/american-express.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "american_express",
        },
        date: "11 Aug 2020, 5:13 pm",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Emma Smith",
        email: "e.smith@kpmg.com.au",
        company: "-",
        payment: {
            icon: "/media/svg/card-logos/mastercard.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "mastercard",
        },
        date: "14 Dec 2020, 8:43 pm",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Melody Macy",
        email: "melody@altbox.com",
        company: "Google",
        payment: {
            icon: "/media/svg/card-logos/visa.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "visa",
        },
        date: "01 Dec 2020, 10:12 am",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Max Smith",
        email: "max@kt.com",
        company: "Bistro Union",
        payment: {
            icon: "/media/svg/card-logos/mastercard.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "mastercard",
        },
        date: "12 Nov 2020, 2:01 pm",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Sean Bean",
        email: "sean@dellito.com",
        company: "Astro Limited",
        payment: {
            icon: "/media/svg/card-logos/american-express.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "american_express",
        },
        date: "21 Oct 2020, 5:54 pm",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Brian Cox",
        email: "brian@exchange.com",
        company: "-",
        payment: {
            icon: "/media/svg/card-logos/visa.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "visa",
        },
        date: "19 Oct 2020, 7:32 am",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Mikaela Collins",
        email: "mikaela@pexcom.com",
        company: "Keenthemes",
        payment: {
            icon: "/media/svg/card-logos/american-express.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "american_express",
        },
        date: "23 Sep 2020, 12:37 am",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Francis Mitcham",
        email: "f.mitcham@kpmg.com.au",
        company: "Paypal",
        payment: {
            icon: "/media/svg/card-logos/mastercard.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "mastercard",
        },
        date: "11 Sep 2020, 3:15 pm",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Olivia Wild",
        email: "olivia@corpmail.com",
        company: "-",
        payment: {
            icon: "/media/svg/card-logos/american-express.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "american_express",
        },
        date: "03 Sep 2020, 1:08 am",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Neil Owen",
        email: "owen.neil@gmail.com",
        company: "Paramount",
        payment: {
            icon: "/media/svg/card-logos/visa.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "visa",
        },
        date: "01 Sep 2020, 4:58 pm",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Dan Wilson",
        email: "dam@consilting.com",
        company: "Trinity Studio",
        payment: {
            icon: "/media/svg/card-logos/visa.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "visa",
        },
        date: "18 Aug 2020, 3:34 pm",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Emma Bold",
        email: "emma@intenso.com",
        company: "B&T Legal Services",
        payment: {
            icon: "/media/svg/card-logos/mastercard.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "mastercard",
        },
        date: "14 Aug 2020, 1:21 pm",
    },
    {
        id: Math.floor(Math.random() * 99999) + 1,
        name: "Ana Crown",
        email: "ana.cf@limtel.com",
        company: "Paysafe Security",
        payment: {
            icon: "/media/svg/card-logos/american-express.svg",
            ccnumber:
                "**** " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            label: "american_express",
        },
        date: "11 Aug 2020, 5:13 pm",
    },
];

export { ICustomer };

export default customers;
