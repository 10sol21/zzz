package com.zzzpro.zzz.soo.dto;

import com.zzzpro.zzz.sol.dto.BoardDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SearchDto {
	private String riotidgamename;
	private String riotidtagline;
	private String championname;
	
}
