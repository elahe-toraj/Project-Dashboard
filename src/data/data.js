import { iconsImgs } from "../utils/images";
import { personsImgs } from "../utils/images";

export const navigationLinks = [
    { id: 1, title: 'خانه', image: iconsImgs.home, path: '/' },
    { id: 2, title: 'کارهای روزانه', image: iconsImgs.budget, path: '/budget' },
    { id: 3, title: 'تعامل ها', image: iconsImgs.plane, path: '/transactions' },
    { id: 4, title: 'توضیحات', image: iconsImgs.wallet, path: '/subscriptions' },
    { id: 5, title: 'اعضای گروه', image: iconsImgs.bills, path: '/loans' },
    { id: 6, title: 'گزارش کار', image: iconsImgs.report, path: '/reports' },
    { id: 7, title: 'دستاورد', image: iconsImgs.wallet, path: '/savings' },
    { id: 8, title: 'مشاوره', image: iconsImgs.wealth, path: '/financial-advice' },
    { id: 9, title: 'پروفایل', image: iconsImgs.user, path: '/account' },
    { id: 10, title: 'تنظیمات', image: iconsImgs.gears, path: '/settings' }
];

export const transactions = [
    {
        id: 11, 
        name: "الهه",
        image: personsImgs.person_four,
        date: "23/12/04",
        amount: 22000
    },
    {
        id: 12, 
        name: "امیر",
        image: personsImgs.person_three,
        date: "23/07/21",
        amount: 20000
    },
    {
        id: 13, 
        name: "هستی",
        image: personsImgs.person_two,
        date: "23/08/25",
        amount: 30000
    }
];

export const reportData = [
    {
        id: 14,
        month: "فروردین",
        value1: 45,
        value2: 60,
    },
    {
        id: 15,
        month: "اردیبهشت",
        value1: 45,
        value2: 70
    },
    {
        id: 16,
        month: "خرداد",
        value1: 45,
        value2: null
    },
    {
        id: 17,
        month: "تیر",
        value1: 70,
        value2: null
    },
    {
        id: 18,
        month: "مرداد",
        value1: 45,
        value2: null
    }
];

export const budget = [
    {
        id: 19, 
        title: "Subscriptions",
        type: "Automated",
        amount: 220000
    },
    {
        id: 20, 
        title: "Loan Payment",
        type: "Automated",
        amount: 160000
    },
    {
        id: 21, 
        title: "Foodstuff",
        type: "Automated",
        amount: 200000
    },
    {
        id: 22, 
        title: "Subscriptions",
        type: null,
        amount: 100000
    },
    {
        id: 23, 
        title: "Subscriptions",
        type: null,
        amount: 400000
    }
];

export const subscriptions = [
    {
        id: 24,
        title: "LinkedIn",
        due_date: "23/12/04",
        amount: 8000000
    },
    {
        id: 25,
        title: "Netflix",
        due_date: "23/12/10",
        amount: 5000000
    },
    {
        id: 26,
        title: "inestagaram",
        due_date: "23/12/22",
        amount: 2000000
    }
];

export const savings = [
    {
        id: 27,
        image: personsImgs.person_one,
        saving_amount: 25000000,
        title: "پروژه شرکتی",
        date_taken: "23/12/22",
        amount_left: 400000
    }
];

export const userData = {
  firstName: "علی",
  lastName: "محمدی",
  nationalId: "1234567890",
  phone: "09120000000",
  email: "ali@example.com",
};
