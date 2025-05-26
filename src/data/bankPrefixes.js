const bankPrefixList = [
  { bank: "اقتصاد نوین", prefix: "627412" },
  { bank: "توسعه صادرات ایران", prefix: "207177" },
  { bank: "انصار", prefix: "627381" },
  { bank: "پاسارگاد", prefix: "502229" },
  { bank: "ایران زمین", prefix: "505785" },
  { bank: "شهر", prefix: "502806" },
  { bank: "پارسیان", prefix: "622106" },
  { bank: "توسعه تعاون", prefix: "502908" },
  { bank: "پارسیان", prefix: "639194" },
  { bank: "کارآفرین", prefix: "502910" },
  { bank: "پارسیان", prefix: "627884" },
  { bank: "دی", prefix: "502938" },
  { bank: "پاسارگاد", prefix: "639347" },
  { bank: "گردشگری", prefix: "505416" },
  { bank: "آینده", prefix: "636214" },
  { bank: "موسسه اعتباری کوثر (سپه)", prefix: "505801" },
  { bank: "تجارت", prefix: "627353" },
  { bank: "سپه", prefix: "589210" },
  { bank: "رفاه کارگران", prefix: "589463" },
  { bank: "صادرات ایران", prefix: "603769" },
  { bank: "کشاورزی", prefix: "603770" },
  { bank: "حکمت ایرانیان (سپه)", prefix: "636949" },
  { bank: "ملی ایران", prefix: "603799" },
  { bank: "قرض الحسنه مهر ایران", prefix: "606373" },
  { bank: "ملت", prefix: "610433" },
  { bank: "سامان", prefix: "621986" },
  { bank: "سرمایه", prefix: "639607" },
  { bank: "سینا", prefix: "639346" },
  { bank: "کارآفرین", prefix: "627488" },
  { bank: "صنعت و معدن", prefix: "627961" },
  { bank: "پست ایران", prefix: "627760" },
  { bank: "قوامین", prefix: "639599" },
  { bank: "مسکن", prefix: "628023" },
  { bank: "موسسه اعتباری توسعه", prefix: "628157" },
  { bank: "کشاورزی", prefix: "639217" },
  { bank: "مرکزی", prefix: "636795" },
  { bank: "ملت", prefix: "991975" },
  { bank: "مهر اقتصاد (سپه)", prefix: "639370" },
  { bank: "قوامین (سپه)", prefix: "639599" }
];

const bankPrefixes = {};
for (const item of bankPrefixList) {
  bankPrefixes[item.prefix] = item.bank;
}

export default bankPrefixes;
