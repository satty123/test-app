tables - 



CREATE DATABASE IF NOT EXISTS addiction;

USE addiction;

CREATE TABLE ad_lock (en int(11) PRIMARY KEY, ts int(20) NOT NULL );

CREATE TABLE ad_unlock (en int(11) PRIMARY KEY, ts int(20) NOT NULL );

CREATE TABLE ad_on_screen_check (en int(11) PRIMARY KEY, ts int(20) NOT NULL UNIQUE );

CREATE TABLE ad_off_screen_check (en int(10) PRIMARY KEY, ts int(20) NOT NULL );



APIS - 

Insert Data into table ad_lock 
POST API -
http://localhost:3000/ad-lock/insertData

Headers - 
{
	'Content-type':'application/json'
}

Req Body - 

{
  "en":123,
  "ts":124566
}


Insert Data into table ad_unlock 
POST API -
http://localhost:3000/ad-unlock/insertData

Headers - 
{
	'Content-type':'application/json'
}

Req Body - 

{
  "en":123,
  "ts":124566
}

Insert Data into table ad_lock 
POST API -
http://localhost:3000/ad-off-screen-check/insertData

Headers - 
{
	'Content-type':'application/json'
}

Req Body - 

{
  "en":123,
  "ts":124566
}

Insert Data into table ad_lock 
POST API -
http://localhost:3000/ad-on-screen-check/insertData

Headers - 
{
	'Content-type':'application/json'
}

Req Body - 

{
  "en":123,
  "ts":124566
}
