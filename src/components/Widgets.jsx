import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className=' flex p-3 cursor-pointer hover:bg-gray-200 '>
            <div className=' text-[#0177b7] mr-2'><FiberManualRecordIcon /> </div>
            <div>
                <h4 className=' text-base font-semibold '>{heading}</h4>
                <p className=' text-xs font-medium text-gray-500'>{subtitle}</p>
            </div>
        </div>
    );
  return (
    // widgets
    <div className=' sticky top-20 flex-0.2 bg-white rounded-xl border-[1px] border-gray-300 h-fit pb-3 '>
        {/* widgets header */}
        <div className=' flex items-center justify-between p-3 '>
            <h2 className=' font-medium text-xl'>LinkedIn News</h2>
            <InfoIcon />
        </div>
        {newsArticle('Auto firms see CXO churn', '392 readers')}
        {newsArticle('Israel-Hamas war: latest updates', '6014 readers')}
        {newsArticle('Engineering jobs wired for growth', '133 readers')}
        {newsArticle('Spotlight on workplace connections', '632 readers')}
        {newsArticle('Attrition dips at Big Four', '561 readers')}
        {newsArticle('Gas and oil investment too high: IEA', '571 readers')}
        {newsArticle('Green expertise a priority', '229 readers')}
    </div>
  )
}

export default Widgets
