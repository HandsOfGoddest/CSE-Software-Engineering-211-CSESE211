let CartNum = 0

const UserInfo = {
    name: "Nguyễn Hải Linh",
    avt: "src/avt.png"
}
const AdminInfo = {
    fb: "https://www.facebook.com/hailinh.nguyen.359126/",
    ig: "https://www.instagram.com/halee_4u_/"
}

const Brands = [
    {
        src: 'url(brand/brand1.png)'
    },
    {
        src: 'url(brand/brand2.png)'
    },
    {
        src: 'url(brand/brand3.png)'
    },
    {
        src: 'url(brand/brand4.png)'
    },
    {
        src: 'url(brand/brand5.png)'
    },
    {
        src: 'url(brand/brand6.png)'
    },
    {
        src: 'url(brand/brand7.png)'
    },
    {
        src: 'url(brand/brand8.png)'
    },
]

const SaleImg = [
    {
        img:'url(src/qc1.png)'
    },
    {
        img:'url(src/qc2.png)'
    },
    {
        img:'url(src/qc3.png)'
    },
    {
        img:'url(src/qc4.png)'
    },
]

const FoodList = [
    {
        img:'src/cate_favourite.png',
        name:'Best seller'
    },
    {
        img:'src/cg_coffee_web.png',
        name:'Cà phê'
    },
    {
        img:'src/cg_tea_milk_tea_web.png',
        name:'Trà/Trà sữa'
    },
    {
        img:'src/cg_frappu_web.png',
        name:'Đá xay'
    },
]
const Info=[ LikeInfos = [
    {
        img:'sanpham/ice/248032329_354966793072117_3313124578281076600_n.png',
        name: 'Matcha Latte nóng',
        price:'50.000đ'
    },
    {
        img:'sanpham/ice/248044063_4641688769203771_434709590196764546_n.png',
        name: 'Yogurt',
        price:'45.000đ'
    },
    {
        img:'sanpham/ice/248372571_286676373327624_4164321358985460446_n.png',
        name: 'Cà phê đá xay-lạnh',
        price:'50.000đ'
    },
    {
        img:'sanpham/tea/248559554_874055790165853_8582021655486095261_n.png',
        name: 'Trà sữa mắc ca trân châu',
        price:'65.000đ'
    },
    {
        img:'sanpham/tea/248947588_265583778916655_4970803774292495674_n.png',
        name: 'Trà Matcha Latte đá',
        price:'50.000đ'
    },
    {
        img:'sanpham/ice/248975360_416943050021274_2600082065717693336_n.png',
        name: 'Đào Việt quất đá xay',
        price:'70.000đ'
    },
    {
        img:'sanpham/coffee/247549759_558422161912089_1694798677570339297_n.png',
        name: 'Cà phê đen đá',
        price:'45.000đ'
    },
    {
        img: 'sanpham/coffee/247549759_993495524541903_3537576401119388856_n.png',
        name:'Latte đá',
        price:'60.000đ'
    },
],
CoffeeInfos =[
    {
        img:'sanpham/coffee/247549759_558422161912089_1694798677570339297_n.png',
        name: 'Cà phê đen đá',
        price:'45.000đ'
    },
    {
        img: 'sanpham/coffee/247549759_993495524541903_3537576401119388856_n.png',
        name:'Latte đá',
        price:'60.000đ'
    },
    {
        img:'sanpham/coffee/247632159_227741902632938_8883154192977057497_n.png',
        name:'Caramel Machiato',
        price:'65.000đ'
    },
    {
        img:'sanpham/coffee/248417446_591461568863510_1847011481472725158_n.png',
        name:'Cà phê đen nóng',
        price:'45.000đ'
    },
    {
        img:'sanpham/coffee/248427965_237184328395387_2573079507437008000_n.png',
        name:'Cà phê sữa đá',
        price:'50.000đ'
    },
    {
        img:'sanpham/coffee/248530351_420917406228269_2920835992554444995_n.png',
        name:'Ameracano đá',
        price:'55.000đ'
    },
    {
        img:'sanpham/coffee/248547466_399329955182031_8672853969583969156_n.png',
        name:'Cà phê sữa đá chai',
        price:'55.000đ'
    },
    {
        img:'sanpham/coffee/248809847_305355451432356_4944202045160800943_n.png',
        name:'Bạc sỉu nóng',
        price:'50.000đ'
    },
    {
        img:'sanpham/coffee/248920557_443741800443300_4502549210374731285_n.png',
        name:'Latte nóng',
        price:'60.000đ'
    },    
    {
        img:'sanpham/coffee/250041088_1572897993055461_1363873009977516292_n.png',
        name:'Bạc sỉu đá',
        price:'50.000đ'
    },
    {
        img:'sanpham/coffee/250708532_264801882327077_4650583414370827001_n.png',
        name:'Cacao nóng',
        price:'50.000đ'
    }

],
TeaInfos = [
    {
        img:'sanpham/tea/248559554_874055790165853_8582021655486095261_n.png',
        name: 'Trà sữa mắc ca trân châu',
        price:'65.000đ'
    },
    {
        img:'sanpham/tea/248947588_265583778916655_4970803774292495674_n.png',
        name: 'Trà Matcha Latte đá',
        price:'65.000đ'
    },
    {
        img:'sanpham/tea/248975352_1195843614242946_2885270152054857787_n.png',
        name: 'Trà sữa trân châu đường đen',
        price:'65.000đ'
    },
    {
        img:'sanpham/tea/249251106_588773265777608_5685917441887423193_n.png',
        name: 'Trà đen Macchiato',
        price:'65.000đ'
    },
    {
        img:'sanpham/tea/250150794_321009342689368_5491055461066102163_n.png',
        name: 'Trà đào cam sả-đá',
        price:'70.000đ'
    },
    {
        img:'sanpham/tea/250510428_313185313577168_4430756155771821946_n.png',
        name: 'Trà hạt sen-đá',
        price:'65.000đ'
    },
    {
        img:'sanpham/tea/250600902_599850734540439_8036539832526881357_n.png',
        name: 'Trà đào cam sả-nóng',
        price:'70.000đ'
    },
    {
        img:'sanpham/tea/Bottle_TraDao_836487.jpg',
        name: 'Trà đào',
        price:'50.000đ'
    },
],
IceInfos = [
    {
        img:'sanpham/ice/248032329_354966793072117_3313124578281076600_n.png',
        name: 'Matcha Latte nóng',
        price:'50.000đ'
    },
    {
        img:'sanpham/ice/248044063_4641688769203771_434709590196764546_n.png',
        name: 'Yogurt',
        price:'45.000đ'
    },
    {
        img:'sanpham/ice/248372571_286676373327624_4164321358985460446_n.png',
        name: 'Cà phê đá xay-lạnh',
        price:'45.000đ'
    },
    {
        img:'sanpham/ice/248396723_1234347157043523_4890424853142862937_n.png',
        name: 'Chocolate Đá',
        price:'50.000đ'
    },
    {
        img:'sanpham/ice/248947588_265583778916655_4970803774292495674_n.png',
        name: 'Trà Matcha Latte đá',
        price:'50.000đ'
    },
    {
        img:'sanpham/ice/248975360_416943050021274_2600082065717693336_n.png',
        name: 'Đào Việt quất đá xay',
        price:'65.000đ'
    },
    {
        img:'sanpham/ice/249201362_413667170249329_6389914889008284188_n.png',
        name: 'Sinh tố việt quất',
        price:'70.000đ'
    },
    {
        img:'sanpham/ice/249280842_590371875598435_7353483072091584927_n.png',
        name: 'Phúc Bồn tử cam đá xay',
        price:'70.000đ'
    },
    {
        img:'sanpham/ice/249665320_584349589476563_5595621513621091315_n.png',
        name: 'Chanh sả đá xay',
        price:'50.000đ'
    },
    {
        img:'sanpham/ice/250589612_606972377111061_7048609076050617177_n (1).png',
        name: 'Chocalate Đá Xay',
        price:'50.000đ'
    },
],
]