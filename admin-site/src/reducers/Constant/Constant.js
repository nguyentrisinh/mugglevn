/**
 * Created by Asus on 5/9/2017.
 */
var Constant = {
    district_in_hcm_choices: [
        { value: 760, label: "Quận 1" },
        { value: 761, label: "Quận 12" },
        { value: 762, label: "Quận Thủ Đức" },
        { value: 763, label: "Quận 9" },
        { value: 764, label: "Quận Gò Vấp" },
        { value: 765, label: "Quận Bình Thạnh" },
        { value: 766, label: "Quận Tân Bình" },
        { value: 767, label: "Quận Tân Phú" },
        { value: 768, label: "Quận Phú Nhuận" },
        { value: 769, label: "Quận 2" },
        { value: 770, label: "Quận 3" },
        { value: 771, label: "Quận 10" },
        { value: 772, label: "Quận 11" },
        { value: 773, label: "Quận 4" },
        { value: 774, label: "Quận 5" },
        { value: 775, label: "Quận 6" },
        { value: 776, label: "Quận 8" },
        { value: 777, label: "Quận Bình Tân" },
        { value: 778, label: "Quận 7" },
        { value: 783, label: "Huyện Củ Chi" },
        { value: 784, label: "Huyện Hóc Môn" },
        { value: 785, label: "Huyện Bình Chánh" },
        { value: 786, label: "Huyện Nhà Bè" },
        { value: 787, label: "Huyện Cần Giờ" },
    ],
    types:[
        { value: 1, label: "Produce"},
        { value: 2, label: "Outsource"}
    ],
}

export default function ConstantData (state = Constant, action){
    return state;
}