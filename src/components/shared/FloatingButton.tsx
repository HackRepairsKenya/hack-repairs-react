
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const FloatingButton = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button className=' w-[60px] h-[60px] rounded-full flex justify-center'>
        <span>
          <Link
            to="https://api.whatsapp.com/send?phone=%2B254741699821&data=ARDcQzxy6KRi5QHpQbwJaVkp_nUeamfkBKVjNegwnhtaVtEXw9bKjGMsTnWYNkFQa-Hmm2-L7RpRMePO1nDb7coNqNiavzC1MkPVxx1EHPaPuXw8hAoVC5kSjikFkBRjuAxHmyXTDutlJgQU3ZjFxWkYUg&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR0qhenlwitVSZDcEQ-MIND4OV8iMWWPxdLFEvZ58fw6EEFPdzRT0Que90k_aem_AZ5j3RCRNbuXD8UJoheqXwWNC0VVquWig3dQpkYzcu3aVFYzj-GDRAB-4trudLJ_lLPLN9zMIRSi3Wb8v0bPTykg"
            target='_blank'
            className="bg-green-800  w-[50px] h-[50px] rounded-full flex items-center justify-center text-white">
                    <FaWhatsapp className="w-[30px] h-[30px]"/>
          </Link>
        </span>
      </button>
    </div>
  );
};

export default FloatingButton;