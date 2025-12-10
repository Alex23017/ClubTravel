import "../../styles/base/main.scss"
import '../../styles/pages/company.scss';
import '../../styles/components/companyNews.scss';
import '../../styles/pages/tourRequest.scss'
import { getCompanyNews } from '../api/service/companyNews.js';
import { renderOffer } from '../components/companyNews.js';

const data = await getCompanyNews();
renderOffer(data);

