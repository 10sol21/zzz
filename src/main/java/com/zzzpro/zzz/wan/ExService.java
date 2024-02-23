package com.zzzpro.zzz.wan;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ExService {
	@Autowired
	public ExDao eDao;

	public List<ExDto> champions(ExDto eDto) {
		return eDao.champions(eDto);
	}

	public List<ExDto> linePick(ExDto eDto) {
		return eDao.linePick(eDto);
	}

	public List<ExDto> test(ExDto eDto) { // champions 메서드에서 받아온 챔피언값 필요함 html에서 라인탭누르면 이쪽으로 넘어온 js실행원리
		eDto.setLine('%' + eDto.getLine() + '%');
		if (eDto.getLine().equals("%all%")) {
			return eDao.champions(eDto);
		} else {
			return eDao.test(eDto);
		}
	}

}
