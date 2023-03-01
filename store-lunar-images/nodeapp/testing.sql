# LunarImage [id {int type, PK}| img_name {varchar type}| img_type {varchar type}| img {blob type}]
# Metadata [m_id {int type}| longitude {int type}| latitude {int type}| timeTaken {time type}| dateTaken {date type}]

select * 
from LunarImage;

select img 
from LunarImage
where img_name = '7';

alter table LunarImage
drop column img;

alter table LunarImage
add img blob not null;

delete from LunarImage
where id = 1;

# LOAD_FILE - reads the file and returns the file contents as a string
# also the file path has to be '/' and NOT '\'
insert into LunarImage
values(1, '7', 'jpg', LOAD_FILE('C:/Users/Rich/Desktop/Senior Design/Moon Images (Full Moon)/7.jpg'));	
